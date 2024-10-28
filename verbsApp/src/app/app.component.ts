import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent,FooterComponent } from './shared/layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'verbsApp';
}
