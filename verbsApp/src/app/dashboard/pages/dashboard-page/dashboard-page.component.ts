import { Component } from '@angular/core';
import { HeaderComponent, FooterComponent } from '../../../shared/layout';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export default class DashboardPageComponent {

}
