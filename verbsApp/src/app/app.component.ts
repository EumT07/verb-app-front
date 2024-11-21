import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'verbsApp';
  onActive(){
    if (typeof window !== 'undefined') {
      // Browser-specific code, like scrolling to the top
      window.scrollTo(0, 0);
    }
  }
}
