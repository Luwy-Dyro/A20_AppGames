import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { QuestionsComponent } from "../../../component/questions/questions.component";
import { jarallax } from 'jarallax';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import AOS from 'aos';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-game-server-1',
    imports: [QuestionsComponent, CommonModule, RouterLink, BtnMainHoverDirective],
    templateUrl: './game-server-1.component.html',
    styleUrl: './game-server-1.component.css'
})
export class GameServer1Component {

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
  selectedFilter: string = '*'; // Default filter shows all items

  items = [
    { title: 'Thunder and City', category: 'popular survival', price: '$14.99', discount: '20% OFF', image: 'assets/images/covers/1.webp' },
    { title: 'Mystic Racing Z', category: 'sandbox', price: '$14.99', discount: '20% OFF', image: 'assets/images/covers/2.webp' },
    { title: 'Silent Wrath', category: 'survival', price: '$14.99', discount: '20% OFF', image: 'assets/images/covers/3.webp' },
    { title: 'Funk Dungeon', category: 'popular fps', price: '$14.99', discount: '20% OFF', image: 'assets/images/covers/4.webp' },
    { title: 'Galactic Odyssey', category: 'popular', price: '$14.99', discount: '20% OFF', image: 'assets/images/covers/5.webp' },
    { title: 'Warfare Legends', category: 'fps', price: '$14.99', discount: '20% OFF', image: 'assets/images/covers/6.webp' },
    { title: 'Raceway Revolution', category: 'popular sandbox', price: '$14.99', discount: '20% OFF', image: 'assets/images/covers/7.webp' },
    { title: 'Starborne Odyssey', category: 'sandbox', price: '$14.99', discount: '20% OFF', image: 'assets/images/covers/8.webp' },
  ];

  setFilter(filter: string): void {
    this.selectedFilter = filter;
  }

  isItemVisible(item: any): boolean {
    if (this.selectedFilter === '*') {
      return true;
    }
    return item.category.split(' ').includes(this.selectedFilter.replace('.', ''));
  }
}
