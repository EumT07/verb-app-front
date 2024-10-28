import { Component } from '@angular/core';
import { HeaderComponent, FooterComponent } from '../../../shared/layout';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export default class SettingsComponent {

}
