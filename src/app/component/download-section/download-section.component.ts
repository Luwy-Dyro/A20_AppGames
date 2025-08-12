import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { jarallax } from 'jarallax';

@Component({
    selector: 'app-download-section',
    imports: [RouterLink],
    templateUrl: './download-section.component.html',
    styleUrl: './download-section.component.css'
})
export class DownloadSectionComponent {
  ngOnInit(): void {
    const elements = document.querySelectorAll('.jarallax');
    const options = {
      speed: 0.5,
    };
    jarallax(elements, options);
  }
}
