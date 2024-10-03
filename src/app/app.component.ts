import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardCountComponent } from 'Card-Count';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardCountComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'count-card';
}
