import { Directive, ElementRef, Input, Renderer2, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appAirPollution]'
})
export class AirPollutionDirective implements OnChanges {
  private readonly airPollution = ['good', 'fair', 'air-moderate', 'poor', 'very-poor'];

  @Input('appAirPollution') airPollutionIndex: number;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  /*
  * Using the lifecycle hook OnChanges on AirPollutionDirective to change data values
  * instead of using a Resolver to wait data from de server before present the view.
  */
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.airPollutionIndex.currentValue !== undefined) {
      if (!changes.airPollutionIndex.firstChange) {
        this.renderer.removeClass(this.el.nativeElement,
          this.airPollution[changes.airPollutionIndex.previousValue - 1]);
      }
      this.renderer.addClass(this.el.nativeElement,
        this.airPollution[changes.airPollutionIndex.currentValue - 1]);
    }
  }

}
