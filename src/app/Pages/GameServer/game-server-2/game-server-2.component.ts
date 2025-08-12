import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { QuestionsComponent } from '../../../component/questions/questions.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { jarallax } from 'jarallax';
import AOS from 'aos';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-game-server-2',
    imports: [QuestionsComponent, CommonModule, BtnMainHoverDirective],
    templateUrl: './game-server-2.component.html',
    styleUrl: './game-server-2.component.css'
})
export class GameServer2Component {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  games = [
    {
      name: 'Thunder and City',
      category: 'popular survival',
      stars: 5,
      rating: 4.75,
      price: 14.99,
      link: 'pricing-table-one.html',
      image: 'assets/images/covers-square/1.webp',
    },
    {
      name: 'Mystic Racing Z',
      category: 'sandbox',
      stars: 4,
      rating: 4.5,
      price: 14.99,
      link: 'pricing-table-one.html',
      image: 'assets/images/covers-square/2.webp',
    },
    {
      name: 'Funk Dungeon',
      category: 'popular fps',
      stars: 5,
      rating: 4.75,
      price: 14.99,
      link: 'pricing-table-one.html',
      image: 'assets/images/covers-square/4.webp',
    },
    {
      name: 'Cyber Nexus',
      category: 'popular',
      stars: 5,
      rating: 4.75,
      price: 14.99,
      link: 'pricing-table-one.html',
      image: 'assets/images/covers-square/9.webp',
    },
    {
      name: 'Galactic Odyssey',
      category: 'popular',
      stars: 5,
      rating: 4.75,
      price: 14.99,
      link: 'pricing-table-one.html',
      image: 'assets/images/covers-square/5.webp',
    },
    {
      name: 'Starborne Odyssey',
      category: 'sandbox',
      stars: 5,
      rating: 4.75,
      price: 14.99,
      link: 'pricing-table-one.html',
      image: 'assets/images/covers-square/8.webp',
    },
    {
      name: 'Warfare Legends',
      category: 'fps',
      stars: 5,
      rating: 4.75,
      price: 14.99,
      link: 'pricing-table-one.html',
      image: 'assets/images/covers-square/6.webp',
    },
    {
      name: 'Raceway Revolution',
      category: 'popular sandbox',
      stars: 5,
      rating: 4.75,
      price: 14.99,
      link: 'pricing-table-one.html',
      image: 'assets/images/covers-square/7.webp',
    },
    {
      name: 'Silent Wrath',
      category: 'survival',
      stars: 5,
      rating: 4.75,
      price: 14.99,
      link: 'pricing-table-one.html',
      image: 'assets/images/covers-square/3.webp',
    }
  ];

  selectedFilter: string = '*';
  filteredGames: any[] = [];

  ngOnInit(): void {
    this.filteredGames = this.games;
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

  applyFilter(filter: string): void {
    this.selectedFilter = filter;
    if (filter === '*') {
      this.filteredGames = this.games;
    } else {
      this.filteredGames = this.games.filter((game) =>
        game.category.includes(filter.replace('.', ''))
      );
    }
  }

}
