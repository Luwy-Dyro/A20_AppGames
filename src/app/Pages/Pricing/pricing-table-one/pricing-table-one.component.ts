import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
import { jarallax } from 'jarallax';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';
import { SpinnerComponent } from '../../../component/spinner/spinner.component';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { GamesService } from '../../../Service/games.service';
import { EMPTY, map } from 'rxjs';
import { Games } from '../../../interfaces/games.interface';
import { GamesDetails } from '../../../interfaces/gamesDetails.interace';
import { AuthloginService } from '../../../Service/authlogin.service';

@Component({
    selector: 'app-pricing-table-one',
    imports: [CommonModule, SpinnerComponent],
    templateUrl: './pricing-table-one.component.html',
    styleUrl: './pricing-table-one.component.css'
})
export class PricingTableOneComponent {
Array(arg0: any) {
throw new Error('Method not implemented.');
}
  authLogin = inject(AuthloginService)

  activedRoute = inject(ActivatedRoute)
  gamesService = inject(GamesService)

  gameSlug = toSignal(
    this.activedRoute.params.pipe(
      map(params => params['slug'])
    )
  );

  gamesResource = rxResource<GamesDetails, string>({
    params: () => this.gameSlug() ?? null,    
    stream: ({ params: slug }) => this.gamesService.getGameBySlug(slug)
  })


  getStars(rating: number | undefined): unknown[] {
    return Array(Math.floor(rating ?? 0));
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
  pricingPlans = [
    {
      slots: '4 Slots',
      opt1Price: 3.59,
      opt2Price: 2.59,
      normalPrice: 9.99,
      locations: [
        { value: 'option-1', flag: 'united-kingdom', name: 'London, England' },
        { value: 'option-2', flag: 'france', name: 'Paris, France' },
        { value: 'option-3', flag: 'germany', name: 'Frankfurt, Germany' },
        { value: 'option-4', flag: 'netherlands', name: 'Amsterdam, Netherlands' },
        { value: 'option-5', flag: 'sweden', name: 'Stockholm, Sweden' },
        { value: 'option-6', flag: 'finland', name: 'Helsinki, Finland' },
        { value: 'option-7', flag: 'usa', name: 'Los Angeles, USA' },
        { value: 'option-8', flag: 'canada', name: 'Quebec, Canada' },
        { value: 'option-9', flag: 'australia', name: 'Sydney, Australia' },
        { value: 'option-10', flag: 'brazil', name: 'Sao Paulo, Brazil' },
        { value: 'option-11', flag: 'thailand', name: 'Bangkok, Thailand' },
        { value: 'option-12', flag: 'indonesia', name: 'Jakarta, Indonesia' }
      ],
      features: [
        'Super Quick Setup',
        'Premium Hardware',
        'DDos Protection',
        '24/7 Customer Support'
      ]
    },
    {
      slots: '10 Slots',
      opt1Price: 5.59,
      opt2Price: 3.59,
      normalPrice: 15.99,
      locations: [
        { value: 'option-1', flag: 'united-kingdom', name: 'London, England' },
        { value: 'option-2', flag: 'france', name: 'Paris, France' },
        { value: 'option-3', flag: 'germany', name: 'Frankfurt, Germany' },
        { value: 'option-4', flag: 'netherlands', name: 'Amsterdam, Netherlands' },
        { value: 'option-5', flag: 'sweden', name: 'Stockholm, Sweden' },
        { value: 'option-6', flag: 'finland', name: 'Helsinki, Finland' },
        { value: 'option-7', flag: 'usa', name: 'Los Angeles, USA' },
        { value: 'option-8', flag: 'canada', name: 'Quebec, Canada' },
        { value: 'option-9', flag: 'australia', name: 'Sydney, Australia' },
        { value: 'option-10', flag: 'brazil', name: 'Sao Paulo, Brazil' },
        { value: 'option-11', flag: 'thailand', name: 'Bangkok, Thailand' },
        { value: 'option-12', flag: 'indonesia', name: 'Jakarta, Indonesia' }
      ],
      features: [
        'Super Quick Setup',
        'Premium Hardware',
        'DDos Protection',
        '24/7 Customer Support'
      ]
    },
    {
      slots: '20 Slots',
      opt1Price: 8.59,
      opt2Price: 5.59,
      normalPrice: 24.99,
      locations: [
        { value: 'option-1', flag: 'united-kingdom', name: 'London, England' },
        { value: 'option-2', flag: 'france', name: 'Paris, France' },
        { value: 'option-3', flag: 'germany', name: 'Frankfurt, Germany' },
        { value: 'option-4', flag: 'netherlands', name: 'Amsterdam, Netherlands' },
        { value: 'option-5', flag: 'sweden', name: 'Stockholm, Sweden' },
        { value: 'option-6', flag: 'finland', name: 'Helsinki, Finland' },
        { value: 'option-7', flag: 'usa', name: 'Los Angeles, USA' },
        { value: 'option-8', flag: 'canada', name: 'Quebec, Canada' },
        { value: 'option-9', flag: 'australia', name: 'Sydney, Australia' },
        { value: 'option-10', flag: 'brazil', name: 'Sao Paulo, Brazil' },
        { value: 'option-11', flag: 'thailand', name: 'Bangkok, Thailand' },
        { value: 'option-12', flag: 'indonesia', name: 'Jakarta, Indonesia' }
      ],
      features: [
        'Super Quick Setup',
        'Premium Hardware',
        'DDos Protection',
        '24/7 Customer Support'
      ]
    },
    {
      slots: 'Custom',
      opt1Price: 15.59,
      opt2Price: 10.59,
      normalPrice: 36.99,
      locations: [
        { value: 'option-1', flag: 'united-kingdom', name: 'London, England' },
        { value: 'option-2', flag: 'france', name: 'Paris, France' },
        { value: 'option-3', flag: 'germany', name: 'Frankfurt, Germany' },
        { value: 'option-4', flag: 'netherlands', name: 'Amsterdam, Netherlands' },
        { value: 'option-5', flag: 'sweden', name: 'Stockholm, Sweden' },
        { value: 'option-6', flag: 'finland', name: 'Helsinki, Finland' },
        { value: 'option-7', flag: 'usa', name: 'Los Angeles, USA' },
        { value: 'option-8', flag: 'canada', name: 'Quebec, Canada' },
        { value: 'option-9', flag: 'australia', name: 'Sydney, Australia' },
        { value: 'option-10', flag: 'brazil', name: 'Sao Paulo, Brazil' },
        { value: 'option-11', flag: 'thailand', name: 'Bangkok, Thailand' },
        { value: 'option-12', flag: 'indonesia', name: 'Jakarta, Indonesia' }
      ],
      features: [
        'Super Quick Setup',
        'Premium Hardware',
        'DDos Protection',
        '24/7 Customer Support'
      ]
    }
  ];
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
}
