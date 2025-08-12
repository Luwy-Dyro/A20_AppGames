import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BtnMainHoverDirective } from '../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-game-collection',
    imports: [CommonModule, RouterLink, BtnMainHoverDirective],
    templateUrl: './game-collection.component.html',
    styleUrl: './game-collection.component.css'
})
export class GameCollectionComponent {
  games = [
    {
      title: "Thunder and City",
      price: 14.99,
      image: "assets/images/covers/1.webp",
      orderLink: "pricing-table-one.html"
    },
    {
      title: "Mystic Racing Z",
      price: 14.99,
      image: "assets/images/covers/2.webp",
      orderLink: "pricing-table-one.html"
    },
    {
      title: "Silent Wrath",
      price: 14.99,
      image: "assets/images/covers/3.webp",
      orderLink: "pricing-table-one.html"
    },
    {
      title: "Funk Dungeon",
      price: 14.99,
      image: "assets/images/covers/4.webp",
      orderLink: "pricing-table-one.html"
    },
    {
      title: "Galactic Odyssey",
      price: 14.99,
      image: "assets/images/covers/5.webp",
      orderLink: "pricing-table-one.html"
    },
    {
      title: "Warfare Legends",
      price: 14.99,
      image: "assets/images/covers/6.webp",
      orderLink: "pricing-table-one.html"
    },
    {
      title: "Raceway Revolution",
      price: 14.99,
      image: "assets/images/covers/7.webp",
      orderLink: "pricing-table-one.html"
    },
    {
      title: "Starborne Odyssey",
      price: 14.99,
      image: "assets/images/covers/8.webp",
      orderLink: "pricing-table-one.html"
    }
  ];
}
