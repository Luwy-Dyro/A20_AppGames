import { Component, ElementRef, ViewChild, AfterViewInit, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { GameCollectionComponent } from "../../../component/game-collection/game-collection.component";
import { QuestionsComponent } from "../../../component/questions/questions.component";
import Swiper from 'swiper';
import { DownloadSectionComponent } from "../../../component/download-section/download-section.component";
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.css';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-index',
    imports: [GameCollectionComponent, QuestionsComponent, DownloadSectionComponent, CommonModule, RouterLink, BtnMainHoverDirective],
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.css']
})
export class IndexComponent implements AfterViewInit, OnInit {
  @ViewChild('grabCursor') grabCursorContainer!: ElementRef;

  ngAfterViewInit() {
    new Swiper(this.grabCursorContainer.nativeElement, {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      grabCursor: true,
      autoplay: {
        delay: 3000, // Slide will automatically change every 3 seconds
        disableOnInteraction: false, // Keep autoplay active even after manual interaction (swiping)
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

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
  games = [
    {
      name: 'Galactic Odyssey',
      imageUrl: 'assets/images/slider/1.webp',
      description: 'Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum...',
      price: 9.99,
      link: 'pricing-table-one.html'
    },
    {
      name: 'Mystic Racing',
      imageUrl: 'assets/images/slider/2.webp',
      description: 'Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum...',
      price: 12.99,
      link: 'pricing-table-one.html'
    },
    {
      name: 'Silent Wrath',
      imageUrl: 'assets/images/slider/3.webp',
      description: 'Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum...',
      price: 14.99,
      link: 'pricing-table-one.html'
    },
    {
      name: 'Funk Dungeon',
      imageUrl: 'assets/images/slider/4.webp',
      description: 'Aute esse non magna elit dolore dolore dolor sit est. Ea occaecat ea duis laborum...',
      price: 15.99,
      link: 'pricing-table-one.html'
    }
  ];
  paymentMethods = [
    { img: 'assets/images/payments/visa.webp', name: 'Visa' },
    { img: 'assets/images/payments/mastercard.webp', name: 'MasterCard' },
    { img: 'assets/images/payments/paypal.webp', name: 'PayPal' },
    { img: 'assets/images/payments/skrill.webp', name: 'Skrill' },
    { img: 'assets/images/payments/jcb.webp', name: 'JCB' },
    { img: 'assets/images/payments/american-express.webp', name: 'American Express' }
  ];
}
