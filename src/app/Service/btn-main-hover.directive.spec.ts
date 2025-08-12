import { BtnMainHoverDirective } from './btn-main-hover.directive';
import { ElementRef, Renderer2 } from '@angular/core';

describe('BtnMainHoverDirective', () => {
  let elementRef: ElementRef;
  let renderer: Renderer2;

  beforeEach(() => {
    elementRef = {
      nativeElement: document.createElement('a'), // Mock an HTML element
    } as ElementRef;

    renderer = {
      setAttribute: jasmine.createSpy('setAttribute'), // Mock Renderer2 methods
    } as unknown as Renderer2;
  });

  it('should create an instance', () => {
    const directive = new BtnMainHoverDirective(elementRef, renderer);
    expect(directive).toBeTruthy();
  });

  it('should set data-hover attribute on initialization', () => {
    const directive = new BtnMainHoverDirective(elementRef, renderer);
    elementRef.nativeElement.textContent = 'Get Hosting';
    directive.ngAfterViewInit();

    expect(renderer.setAttribute).toHaveBeenCalledWith(
      elementRef.nativeElement,
      'data-hover',
      'Get Hosting'
    );
  });
});
