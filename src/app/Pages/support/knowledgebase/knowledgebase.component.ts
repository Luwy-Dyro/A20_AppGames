import AOS from 'aos';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { jarallax } from 'jarallax';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-knowledgebase',
    imports: [CommonModule, BtnMainHoverDirective],
    templateUrl: './knowledgebase.component.html',
    styleUrl: './knowledgebase.component.css'
})
export class KnowledgebaseComponent {
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
  categories = [
    { title: 'Thunder and City', count: 12, subtitle: 'Help with Thunder and City', link: 'faq.html' },
    { title: 'Mystic Racing Z', count: 19, subtitle: 'Help with Mystic Racing Z', link: 'faq.html' },
    { title: 'Silent Wrath', count: 17, subtitle: 'Help with Silent Wrath', link: 'faq.html' },
    { title: 'Funk Dungeon', count: 18, subtitle: 'Help with Funk Dungeon', link: 'faq.html' },
    { title: 'Galactic Odyssey', count: 17, subtitle: 'Help with Galactic Odyssey', link: 'faq.html' },
    { title: 'Warfare Legends', count: 21, subtitle: 'Help with Warfare Legends', link: 'faq.html' },
    { title: 'Race Revolution', count: 17, subtitle: 'Help with Race Revolution', link: 'faq.html' },
    { title: 'Cyber Nexus', count: 19, subtitle: 'Help with Cyber Nexus', link: 'faq.html' },
    { title: 'Ancient Realms', count: 25, subtitle: 'Help with Ancient Realms', link: 'faq.html' },
  ];
}
