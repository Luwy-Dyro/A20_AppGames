import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { jarallax } from 'jarallax';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-pricing-table-three',
    imports: [CommonModule, BtnMainHoverDirective],
    templateUrl: './pricing-table-three.component.html',
    styleUrl: './pricing-table-three.component.css'
})
export class PricingTableThreeComponent {
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

  testSrc = 'assets/images/flags/united-kingdom.png'
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  checkboxChecked: boolean = false;

  // Package data
  packages = [
    { name: 'Rookie', playerSlots: 10, memory: 2, price1: 9.99, price2: 5.99 },
    { name: 'Warrior', playerSlots: 40, memory: 4, price1: 14.99, price2: 9.99 },
    { name: 'General', playerSlots: 60, memory: 8, price1: 19.99, price2: 14.99 },
    { name: 'Commander', playerSlots: 125, memory: 16, price1: 29.99, price2: 24.99 },
    { name: 'Legendary', playerSlots: 200, memory: 32, price1: 59.99, price2: 49.99 }
  ];

  // Server locations data
  serverLocations = [
    "London, England", "Paris, France", "Frankfurt, Germany", "Amsterdam, Netherlands",
    "Stockholm, Sweden", "Helsinki, Finland", "Los Angeles, USA", "Quebec, Canada",
    "Sydney, Australia", "São Paulo, Brazil", "Bangkok, Thailand", "Jakarta, Indonesia"
  ];

  // Toggles the checkbox state
  onToggle() {
    // This method could be expanded to handle more specific behavior if needed
  }
}
