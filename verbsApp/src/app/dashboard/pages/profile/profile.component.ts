import { Component } from '@angular/core';
import { HeaderComponent, FooterComponent } from '../../../shared/layout';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export default class ProfileComponent {

}
