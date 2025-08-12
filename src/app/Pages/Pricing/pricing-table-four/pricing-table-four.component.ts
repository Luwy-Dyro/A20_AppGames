import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { Options } from '@angular-slider/ngx-slider';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';
import { jarallax } from 'jarallax';

@Component({
    selector: 'app-pricing-table-four',
    imports: [CommonModule, NgxSliderModule, BtnMainHoverDirective],
    templateUrl: './pricing-table-four.component.html',
    styleUrl: './pricing-table-four.component.css'
})
export class PricingTableFourComponent {
  locations = [
    { id: 1, name: 'London, England', flag: 'united-kingdom.png' },
    { id: 2, name: 'Paris, France', flag: 'france.png' },
    { id: 3, name: 'Frankfurt, Germany', flag: 'germany.png' },
    { id: 4, name: 'Amsterdam, Netherlands', flag: 'netherlands.png' },
    { id: 5, name: 'Stockholm, Sweden', flag: 'sweden.png' },
    { id: 6, name: 'Helsinki, Finland', flag: 'finland.png' },
    { id: 7, name: 'Los Angeles, USA', flag: 'usa.png' },
    { id: 8, name: 'Quebec, Canada', flag: 'canada.png' },
    { id: 9, name: 'Sydney, Australia', flag: 'australia.png' },
    { id: 10, name: 'Sau Paulo, Brazil', flag: 'brazil.png' },
    { id: 11, name: 'Bangkok, Thailand', flag: 'thailand.png' },
    { id: 12, name: 'Jakarta, Indonesia', flag: 'indonesia.png' }
  ];

  value: number = 100;
  options: Options = {
    floor: 0,
    ceil: 500,
    step: 50,
    showTicks: true,
    showTicksValues: true,
  };
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
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
}
