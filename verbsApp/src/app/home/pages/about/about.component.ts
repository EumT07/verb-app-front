import { Component } from '@angular/core';
import { HeaderComponent, FooterComponent } from '../../../shared/layout';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export default class AboutComponent {

}
