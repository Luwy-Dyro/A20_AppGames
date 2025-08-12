import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeLink: HTMLLinkElement | null = null;

  constructor() {
    this.themeLink = document.createElement('link');
    this.themeLink.rel = 'stylesheet';
    this.themeLink.type = 'text/css';
    document.head.appendChild(this.themeLink);
  }

  setTheme(themePath: string): void {
    if (this.themeLink) {
      this.themeLink.href = themePath;
    }
  }
}
