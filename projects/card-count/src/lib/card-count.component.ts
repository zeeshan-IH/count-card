import { Component, Input } from '@angular/core';

@Component({
  selector: 'dash-count',
  standalone: true,
  imports: [],
  template: `
    <div class="count-card">
        <div class="count-number">{{count}}</div>
        <div class="count-label">{{label}}</div>
    </div>
  `,
  styles: ``
})
export class CardCountComponent {
  @Input() count: number = 0;
  @Input() label: string = 'Total Visits';
}
