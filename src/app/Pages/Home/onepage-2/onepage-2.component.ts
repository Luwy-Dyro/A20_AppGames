import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { jarallax } from 'jarallax';
import Swiper from 'swiper';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-onepage-2',
    imports: [CommonModule, RouterLink, BtnMainHoverDirective],
    templateUrl: './onepage-2.component.html',
    styleUrl: './onepage-2.component.css'
})
export class Onepage2Component {
  headerClass: string = 'transparent';
  @ViewChild('testimonialCarousel') testimonialCarousel!: ElementRef;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollPosition > 50) {
      this.headerClass = 'transparent clone smaller';
    } else {
      this.headerClass = 'transparent';
    }
    const sections = document.querySelectorAll('section');
    let currentSection: string = this.activeSection;

    sections.forEach((section: any) => {
      const rect = section.getBoundingClientRect();
      if (rect.top <= 0 && rect.bottom > 0) {
        currentSection = section.id;
      }
    });

    if (currentSection !== this.activeSection) {
      this.activeSection = currentSection;
    }
  }
  activeSection: string = 'section-hero';

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.activeSection = sectionId;
    }
  }

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
  features = [
    {
      image: 'assets/images/icons/1.png',
      title: 'Super Quick Setup',
      description: 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.',
      delay: 0
    },
    {
      image: 'assets/images/icons/2.png',
      title: 'Premium Hardware',
      description: 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.',
      delay: 200
    },
    {
      image: 'assets/images/icons/3.png',
      title: 'DDos Protection',
      description: 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.',
      delay: 400
    },
    {
      image: 'assets/images/icons/4.png',
      title: 'Fast Support',
      description: 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat duis dolor in.',
      delay: 600
    }
  ];
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
  galleryItems = [
    {
      title: 'Thunder and City',
      image: 'assets/images/covers/1.webp',
      price: '$14.99',
      link: 'pricing-table-one.html',
      discount: '20% OFF'
    },
    {
      title: 'Mystic Racing Z',
      image: 'assets/images/covers/2.webp',
      price: '$14.99',
      link: 'pricing-table-one.html',
      discount: '20% OFF'
    },
    {
      title: 'Silent Wrath',
      image: 'assets/images/covers/3.webp',
      price: '$14.99',
      link: 'pricing-table-one.html',
      discount: '20% OFF'
    },
    {
      title: 'Funk Dungeon',
      image: 'assets/images/covers/4.webp',
      price: '$14.99',
      link: 'pricing-table-one.html',
      discount: '20% OFF'
    },
    {
      title: 'Galactic Odyssey',
      image: 'assets/images/covers/5.webp',
      price: '$14.99',
      link: 'pricing-table-one.html',
      discount: '20% OFF'
    },
    {
      title: 'Warfare Legends',
      image: 'assets/images/covers/6.webp',
      price: '$14.99',
      link: 'pricing-table-one.html',
      discount: '20% OFF'
    },
    {
      title: 'Raceway Revolution',
      image: 'assets/images/covers/7.webp',
      price: '$14.99',
      link: 'pricing-table-one.html',
      discount: '20% OFF'
    },
    {
      title: 'Starborne Odyssey',
      image: 'assets/images/covers/8.webp',
      price: '$14.99',
      link: 'pricing-table-one.html',
      discount: '20% OFF'
    }
  ];
  hotspots = [
    { country: 'United States', top: '39%', left: '20%' },
    { country: 'Australia', top: '76%', left: '87%' },
    { country: 'Indonesia', top: '68%', left: '80%' },
    { country: 'Canada', top: '23%', left: '18%' },
    { country: 'Brazil', top: '68%', left: '33%' },
    { country: 'China', top: '45%', left: '75%' },
    { country: 'France', top: '36%', left: '48%' },
    { country: 'Sweden', top: '23%', left: '51%' },
    { country: 'South Africa', top: '78%', left: '53%' },
  ];
  accordionsLeft = [
    { title: 'What is game hosting?', content: 'Game hosting refers to the process of renting or setting up servers to run multiplayer online games. These servers allow players to connect and play together in the same game world.' },
    { title: 'Why do I need game hosting?', content: 'Game hosting is essential for multiplayer gaming. It provides a dedicated server where players can join, ensuring a smooth and lag-free gaming experience. It also allows you to customize game settings and mods.' },
    { title: 'How do I choose a game hosting provider?', content: 'Consider factors like server location, performance, scalability, customer support, and price when choosing a game hosting provider. Read reviews and ask for recommendations from fellow gamers.' },
    {
      title: 'What types of games can I host?',
      content:
        'You can host various types of games, including first-person shooters, role-playing games, survival games, strategy games, and more. The type of game hosting you need depends on the game\'s requirements.',
    },
    { title: 'What is server latency or ping?', content: 'Server latency or ping measures the time it takes for data to travel between your computer and the game server. Lower ping values indicate better responsiveness and less lag.' },
  ];

  accordionsRight = [
    { title: 'How do I manage a game server?', content: 'Game server management varies depending on the hosting provider and game type. Typically, you\'ll have access to a control panel or command-line interface to configure settings, mods, and player access.' },
    { title: 'Can I run mods on my game server?', content: 'Yes, many game hosting providers support mods. You can install and manage mods to enhance gameplay or customize the game to your liking.' },
    { title: 'What is DDoS protection, and do I need it?', content: 'DDoS (Distributed Denial of Service) protection helps defend your game server from malicious attacks that could disrupt gameplay. It\'s essential for maintaining server stability, especially for popular games.' },
    { title: 'How much does game hosting cost?', content: 'Game hosting costs vary depending on the provider, server type, and game. Prices can range from a few dollars per month for small servers to hundreds for high-performance dedicated servers.' },
    { title: 'Is there 24/7 customer support?', content: 'Many reputable game hosting providers offer 24/7 customer support to assist with technical issues and server management' },
  ];

  activeAccordion: number | null = null;
  activeAccordionRight: number | null = null;

  toggleAccordion(index: number): void {
    this.activeAccordion = this.activeAccordion === index ? null : index;
  }

  toggleAccordionRight(index: number): void {
    this.activeAccordionRight = this.activeAccordionRight === index ? null : index;
  }
  paymentMethods = [
    { src: 'assets/images/payments/visa.webp', alt: 'Visa' },
    { src: 'assets/images/payments/mastercard.webp', alt: 'Mastercard' },
    { src: 'assets/images/payments/paypal.webp', alt: 'PayPal' },
    { src: 'assets/images/payments/skrill.webp', alt: 'Skrill' },
    { src: 'assets/images/payments/jcb.webp', alt: 'JCB' },
    { src: 'assets/images/payments/american-express.webp', alt: 'American Express' }
  ];
  cities = [
    'London', 'Paris', 'Frankfurt', 'Amsterdam', 'Stockholm',
    'Helsinki', 'Los Angeles', 'Quebec', 'Singapore',
    'Sydney', 'Sau Paulo', 'Bangkok', 'Jakarta'
  ];
}
