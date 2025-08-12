import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { jarallax } from 'jarallax';

@Component({
    selector: 'app-news',
    imports: [CommonModule],
    templateUrl: './news.component.html',
    styleUrl: './news.component.css'
})
export class NewsComponent {
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

  posts = [
    {
      category: 'games',
      subcategory: 'guide',
      date: '25.10.2023',
      title: 'How to Set Up Your Own Game Server',
      image: 'assets/images/news/1.webp',
      link: '/news-single',
      description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...'
    },
    {
      category: 'games',
      subcategory: 'guide',
      date: '25.10.2023',
      title: 'Rise in Demand for Private Game Servers',
      image: 'assets/images/news/2.webp',
      link: '/news-single',
      description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...'
    },
    {
      category: 'games',
      subcategory: 'guide',
      date: '25.10.2023',
      title: 'Top Hosting Providers for Game Servers',
      image: 'assets/images/news/3.webp',
      link: '/news-single',
      description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...'
    },
    {
      category: 'games',
      subcategory: 'guide',
      date: '25.10.2023',
      title: 'E-Sports and Competitive Gaming',
      image: 'assets/images/news/4.webp',
      link: '/news-single',
      description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...'
    },
    {
      category: 'games',
      subcategory: 'guide',
      date: '25.10.2023',
      title: 'How to Protecting Your Online World',
      image: 'assets/images/news/5.webp',
      link: '/news-single',
      description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...'
    },
    {
      category: 'games',
      subcategory: 'guide',
      date: '25.10.2023',
      title: '5 Ways to Maintain a Good Posture',
      image: 'assets/images/news/6.webp',
      link: '/news-single',
      description: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...'
    }
  ];
}
