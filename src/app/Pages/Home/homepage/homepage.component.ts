import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, ElementRef, inject, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { jarallax } from 'jarallax';
import { rxResource } from '@angular/core/rxjs-interop';
import Swiper from 'swiper';
import AOS from 'aos';
import { QuestionsComponent } from "../../../component/questions/questions.component";
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';
import { AuthloginService } from '../../../Service/authlogin.service';
import { GamesService } from '../../../Service/games.service';
import { tap } from 'rxjs';
import { GamesResponse } from '../../../interfaces/games.interface';
import { SpinnerComponent } from '../../../component/spinner/spinner.component';

@Component({
    selector: 'app-homepage',
    imports: [QuestionsComponent, CommonModule, RouterLink, BtnMainHoverDirective, SpinnerComponent],
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css'
})
export class Homepage7Component {
  @ViewChild('grabCursor') grabCursorContainer!: ElementRef;
  
  authLogin = inject(AuthloginService)
  gameService = inject(GamesService)

  isLoading = true
  /*1.FORMA*/
  // productsObjects: GamesResponse | null = null

  /*2.FORMA*/
  gamesAPi = rxResource({
      params: () => ({
        page: 1,
        // dates: '2025-04-25,2025-05-01',
        dates: '',
        inverse: '',
        ordering: ''
      }),
      stream: ({params}) => {
        return this.gameService.getGames({
          page: params.page,
          dates: params.dates,
          inverse: params.inverse,
          ordering: params.ordering
        })
      }

    });

  
  

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
    

    //1.FORMA con Objeto
    // this.gameService.getGames({page: 1, dates:  '', inverse: '', ordering: ''})
    // .subscribe(result => {
    //   this.productsObjects = result; // Asumiendo que la respuesta tiene una propiedad 'results'
    //   console.log('Productos VARIABLE =>', this.productsObjects);
    // }); 

    /*2. FORMA a trabex rxResource*/
    //  this.gameService.getGames({page: 1, dates:  '', inverse: '', ordering: ''})
    //     .pipe(
    //       tap(result => console.log("Productos rxRESOURCE => ", result.results))
    //     ).subscribe()
       

    //Forma din Params
    // this.gameService.getGames().subscribe({
      //   next: (result) => console.log('Componente recibe:', result.results),
      //   error: (err) => console.error('Error en petición:', err),
      //   complete: () => console.log('Petición completa')
    // })

  }
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  slides = [
    {
      subtitle: 'API - Json Server',
      title: 'Galactic Odyssey Server Hosting',
      text: 'Your own game server is only 5 minutes away!',
      buttonText: 'Order Your Game Server Now',
      link: 'pricing-table-one.html',
      image: 'assets/images/slider/creative-1.webp'
    },
    {
      subtitle: 'API - Json Server',
      title: 'Warfare Legends Server Hosting',
      text: 'Your own game server is only 5 minutes away!',
      buttonText: 'Order Your Game Server Now',
      link: 'pricing-table-one.html',
      image: 'assets/images/slider/creative-2.webp'
    },
    {
      subtitle: 'API - Json Server',
      title: 'Cyber Nexus Server Hosting',
      text: 'Your own game server is only 5 minutes away!',
      buttonText: 'Order Your Game Server Now',
      link: 'pricing-table-one.html',
      image: 'assets/images/slider/creative-3.webp'
    }
  ];
  features = [
    {
      image: 'assets/images/icons/1.png',
      title: 'Super Quick Setup',
      description: 'Get your server up and running in minutes with our streamlined deployment process.'
    },
    {
      image: 'assets/images/icons/2.png',
      title: 'Premium Hardware',
      description: 'Experience lag-free gaming powered by the latest, high-performance components..'
    },
    {
      image: 'assets/images/icons/3.png',
      title: 'DDos Protection',
      description: 'Play securely with advanced DDoS mitigation safeguarding your games 24/7.'
    },
    {
      image: 'assets/images/icons/4.png',
      title: 'Fast Support',
      description: 'Enjoy peace of mind with our expert support team ready to assist you anytime.'
    }
  ];
  items = [
    { name: 'Thunder and City', price: '$14.99', image: 'assets/images/covers/1.webp', link: 'pricing-table-one.html' },
    { name: 'Mystic Racing Z', price: '$14.99', image: 'assets/images/covers/2.webp', link: 'pricing-table-one.html' },
    { name: 'Silent Wrath', price: '$14.99', image: 'assets/images/covers/3.webp', link: 'pricing-table-one.html' },
    { name: 'Funk Dungeon', price: '$14.99', image: 'assets/images/covers/4.webp', link: 'pricing-table-one.html' },
    { name: 'Galactic Odyssey', price: '$14.99', image: 'assets/images/covers/5.webp', link: 'pricing-table-one.html' },
    { name: 'Warfare Legends', price: '$14.99', image: 'assets/images/covers/6.webp', link: 'pricing-table-one.html' },
    { name: 'Raceway Revolution', price: '$14.99', image: 'assets/images/covers/7.webp', link: 'pricing-table-one.html' },
    { name: 'Starborne Odyssey', price: '$14.99', image: 'assets/images/covers/8.webp', link: 'pricing-table-one.html' }
  ];
  payments = [
    { name: 'Visa', image: 'assets/images/payments/visa.webp' },
    { name: 'MasterCard', image: 'assets/images/payments/mastercard.webp' },
    { name: 'PayPal', image: 'assets/images/payments/paypal.webp' },
    { name: 'Skrill', image: 'assets/images/payments/skrill.webp' },
    { name: 'JCB', image: 'assets/images/payments/jcb.webp' },
    { name: 'American Express', image: 'assets/images/payments/american-express.webp' }
  ];
}
