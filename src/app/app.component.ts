import { Component } from '@angular/core';
import { Router, Event, NavigationEnd, RouterOutlet } from '@angular/router';
import { ThemeService } from './Service/theme.service';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'playhost';
  constructor(private router: Router, private themeService: ThemeService) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Change theme based on the route
        if (event.url === '/homepage-2') {
          this.themeService.setTheme('assets/css/colors/scheme-01.css');
        } else if (event.url === '/homepage-7') {
          this.themeService.setTheme('assets/css/colors/scheme-03.css');
        } else if (event.url === '/onepage-1') {
          this.themeService.setTheme('assets/css/colors/scheme-02.css');
        } else if (event.url === '/onepage-2') {
          this.themeService.setTheme('assets/css/colors/scheme-04.css');
        }
      }
    });
  }
}
