import { Directive, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appBtnMainHover]',
  standalone: true
})
export class BtnMainHoverDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    const text = this.el.nativeElement.textContent.trim();
    this.renderer.setAttribute(this.el.nativeElement, 'data-hover', text);
  }

}
