import { Component } from '@angular/core';
import { jarallax } from 'jarallax';
import { BtnMainHoverDirective } from '../../../Service/btn-main-hover.directive';

@Component({
    selector: 'app-login',
    imports: [BtnMainHoverDirective],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css'
})
export class LoginComponent {
  ngOnInit(): void {
    const elements = document.querySelectorAll('.jarallax');
    const options = {
      speed: 0.5,
    };
    jarallax(elements, options);
  }
}
