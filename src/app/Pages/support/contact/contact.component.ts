import AOS from 'aos';
import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { jarallax } from 'jarallax';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-contact',
    imports: [RouterLink, BtnMainHoverDirective],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css'
})
export class ContactComponent {
  ngOnInit(): void {
    const elements = document.querySelectorAll('.jarallax');
    const options = {
      speed: 0.5,
    };
    jarallax(elements, options);
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 800,
        easing: 'ease',
        once: true,
        mirror: false,
      });
    }
  }
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
}
