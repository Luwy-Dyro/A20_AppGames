import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { jarallax } from 'jarallax';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-pricing-table-two',
    imports: [CommonModule, BtnMainHoverDirective],
    templateUrl: './pricing-table-two.component.html',
    styleUrl: './pricing-table-two.component.css'
})
export class PricingTableTwoComponent {
  plans = [
    {
      title: 'Warrior',
      stars: 1,
      slots: 40,
      memory: '4GB',
      price: 9.99,
      subPricePerSlot: 0.25,
      isTopSeller: false,
    },
    {
      title: 'General',
      stars: 3,
      slots: 60,
      memory: '8GB',
      price: 14.99,
      subPricePerSlot: 0.25,
      isTopSeller: true,
    },
    {
      title: 'Commander',
      stars: 5,
      slots: 125,
      memory: '16GB',
      price: 24.99,
      subPricePerSlot: 0.20,
      isTopSeller: false,
    },
  ];
  features = [
    {
      icon: 'assets/images/icons/1.png',
      title: 'Super Quick Setup',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
      icon: 'assets/images/icons/2.png',
      title: 'Premium Hardware',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
      icon: 'assets/images/icons/3.png',
      title: 'DDos Protection',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
    {
      icon: 'assets/images/icons/4.png',
      title: 'Fast Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
    },
  ];
  payments = [
    { icon: 'assets/images/payments/visa.webp' },
    { icon: 'assets/images/payments/mastercard.webp' },
    { icon: 'assets/images/payments/paypal.webp' },
    { icon: 'assets/images/payments/skrill.webp' },
    { icon: 'assets/images/payments/jcb.webp' },
    { icon: 'assets/images/payments/american-express.webp' },
  ];
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
