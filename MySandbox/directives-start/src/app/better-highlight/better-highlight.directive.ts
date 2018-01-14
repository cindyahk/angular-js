import { 
  Directive, 
  ElementRef, 
  Renderer2, 
  OnInit, 
  HostListener, 
  HostBinding, 
  Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input('defaultColor') defaultColor: string = 'black';
  @Input('hoverColor') hoverColor: string = 'white';

  @HostBinding('style.color') textColor: string = 'black';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.textColor = this.hoverColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.textColor = this.defaultColor;
  }
}
