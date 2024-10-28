import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Links } from '../interfaces/links';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  links: Links[] = [
    {name: "Home",route: '/'},
    {name: "Dashboard",route: '/dashboard'},
    {name: "About",route: '/about'},
    {name: "Team",route: '/team'},
    {name: "Verbs",route: '/verbs'},
  ]
}
