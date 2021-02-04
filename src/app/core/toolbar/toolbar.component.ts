import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, NgZone, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

import { } from 'googlemaps';

import { debounceTime, distinctUntilChanged, filter, takeUntil, tap } from 'rxjs/operators';

import { DashboardService } from '../../dashboard/dashboard.service';
import { ErrorDialogService } from '../dialog/error-dialog.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('autocomplete') autocompleteRef: ElementRef;

  private placesService: google.maps.places.PlacesService;
  private autocompleteService: google.maps.places.AutocompleteService;
  private placeDescriptionSelected: string;

  searchPredictions: google.maps.places.AutocompletePrediction[];
  searchControl = new FormControl();
  isLoading = false;

  private subsNotifier = new Subject();
  isLocationEnable = false;

  constructor(
    private ngZone: NgZone,
    private dashboardService: DashboardService,
    private errorDialogService: ErrorDialogService,
  ) { }

  ngOnInit(): void {
    this.dashboardService.geolocationStatusChanged$.pipe(takeUntil(this.subsNotifier)).subscribe(geolocationStatus => {
      if (geolocationStatus === 'granted') {
        this.isLocationEnable = true;
      } else {
        this.isLocationEnable = false;
      }
    });
  }

  ngAfterViewInit(): void {
    this.placesService = new google.maps.places.PlacesService(this.autocompleteRef.nativeElement);
    this.autocompleteService = new google.maps.places.AutocompleteService();

    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      tap(value => {
        if (value.length <= 2) { this.searchPredictions = []; }
      }),
      filter(value => value.length > 2),
      distinctUntilChanged(),
    ).subscribe(value => {
      this.isLoading = true;
      this.autocompleteService.getPlacePredictions({ input: value }, this.placePredictionsCallback.bind(this));
    });
  }

  enableLocation(): void {
    this.dashboardService.requestGeolocation();
  }

  ngOnDestroy(): void {
    this.subsNotifier.next();
    this.subsNotifier.complete();
  }

  private placePredictionsCallback(
    results: google.maps.places.AutocompletePrediction[],
    status: google.maps.places.PlacesServiceStatus): void {
    console.log('PlacePredictions status:', status);
    console.log('PlacePredictions results:', results);
    /*
     * Google API run outside NgZone because Angular can't detect changes
     * made by async callbacks of third-party libraries
     */
    this.ngZone.run(() => {
      this.isLoading = false;

      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.searchPredictions = results;
      } else {
        this.searchPredictions = [{
          description: 'No records found',
          matched_substrings: undefined,
          place_id: undefined,
          reference: '',
          structured_formatting: undefined,
          terms: undefined,
          types: undefined,
        }];
      }
    });
  }

  onSelectedOption(selected: MatAutocompleteSelectedEvent): void {
    if (selected.option.value.place_id) {
      this.placeDescriptionSelected = selected.option.value.description;
      const placeRequest = {
        placeId: selected.option.value.place_id,
        fields: ['geometry.location']
      };

      this.placesService.getDetails(placeRequest, this.placeDetailsCallback.bind(this));
    }

    this.searchPredictions = [];
    this.autocompleteRef.nativeElement.value = '';
    this.autocompleteRef.nativeElement.blur(); // remove focus
  }

  private placeDetailsCallback(
    result: google.maps.places.PlaceResult,
    status: google.maps.places.PlacesServiceStatus): void {
    console.log('PlaceDetails status:', status);
    console.log('PlaceDetails result:', result);

    this.ngZone.run(() => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        this.dashboardService.setGeolocationName(this.placeDescriptionSelected);
        this.dashboardService.updateGeolocationPosition(
          result.geometry.location.toJSON().lat,
          result.geometry.location.toJSON().lng
        );
      } else {
        this.errorDialogService.openDialog('There was an error getting the location details');
      }
    });
  }

  displayFn(prediction: google.maps.places.AutocompletePrediction): string {
    return prediction && prediction.description ? prediction.description : '';
  }
}
