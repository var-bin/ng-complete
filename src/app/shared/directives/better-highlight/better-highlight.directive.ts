import {
  Directive,
  ElementRef,
  Renderer2,
  OnInit,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elRef: ElementRef,
              private renderer: Renderer2) { }

  ngOnInit() {}

  @HostListener('mouseenter') mouseover() {
    /* this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'red'
      ); */
    this.backgroundColor = 'red';
  }

  @HostListener('mouseleave') mouseleave() {
    /* this.renderer.setStyle(
      this.elRef.nativeElement,
      'background-color',
      'transparent'
      ); */

    this.backgroundColor = 'transparent';
  }
}
