import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-spinner',
  imports: [],
  template: `
      <div class="spinner-overlay">
      <div class="spinner"></div>
      <span class="sr-only">Cargando…</span>
    </div>
    `,
  styleUrl: './spinner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  
})
export class SpinnerComponent { }
