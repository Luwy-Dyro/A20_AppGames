import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { jarallax } from 'jarallax';
import { CountUpModule } from 'ngx-countup';
import Swiper from 'swiper';

@Component({
    selector: 'app-about',
    imports: [CountUpModule, CommonModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.css'
})
export class AboutComponent {

  @ViewChild('testimonialCarousel') testimonialCarousel!: ElementRef;
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
  ngAfterViewInit(): void {
    new Swiper(this.testimonialCarousel.nativeElement, {
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
      breakpoints: {
        375: {
          slidesPerView: 1.5,
          spaceBetween: 20
        },
        557: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      }
    });
  }
  testimonials = [
    {
      text: `"I've been using Playhost for my game server needs, and I couldn't be happier. The server uptime is fantastic, and the customer support team is always quick to assist with any issues."`,
      author: "Michael S.",
      image: "assets/images/people/1.jpg",
      rating: 5
    },
    {
      text: `"Running a game server used to be a hassle, but Playhost makes it easy. The control panel is user-friendly, and I love how they handle server maintenance and updates."`,
      author: "Robert L.",
      image: "assets/images/people/2.jpg",
      rating: 5
    },
    {
      text: `"I've tried several hosting providers in the past, and Playhost is by far the best. Their server performance is top-notch, and I've never experienced lag while playing with friends."`,
      author: "Jake M.",
      image: "assets/images/people/3.jpg",
      rating: 5
    },
    {
      text: `"As a new server owner, I was worried about setup and configuration, but Playhost made it a breeze. They have detailed tutorials and helpful support, which made the process smooth."`,
      author: "Alex P.",
      image: "assets/images/people/4.jpg",
      rating: 5
    },
    {
      text: `"I've been a loyal customer of Playhost for years now. Their dedication to keeping their hardware up-to-date ensures my gaming experience is always optimal."`,
      author: "Edward B.",
      image: "assets/images/people/6.jpg",
      rating: 5
    },
    {
      text: `"When our community needed a reliable server for our esports tournaments, we turned to Playhost, and they've never let us down. Their servers are perfect for competitive gaming."`,
      author: "Daniel H.",
      image: "assets/images/people/7.jpg",
      rating: 5
    },
    {
      text: `"The DDoS protection from Playhost is a lifesaver. We used to get attacked regularly, but since switching to their servers, we haven't had any downtime."`,
      author: "Bryan G.",
      image: "assets/images/people/8.jpg",
      rating: 5
    }
  ];
  stars = [1, 2, 3, 4, 5];
}
