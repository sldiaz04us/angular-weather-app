import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUvIndex]'
})
export class UvIndexDirective implements OnInit {
  private readonly uvi = ['low', 'low', 'low', 'uv-moderate', 'uv-moderate', 'uv-moderate', 'high', 'high', 'very-high', 'very-high', 'very-high'];

  @Input('appUvIndex') uvIndex: number;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    let uvIndexClass = 'extreme';
    if (this.uvIndex < 11) {
      uvIndexClass = this.uvi[Math.round(this.uvIndex)];
    }
    this.renderer.addClass(this.el.nativeElement, uvIndexClass);
  }
}
