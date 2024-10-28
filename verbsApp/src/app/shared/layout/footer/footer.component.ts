import { Component } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { Links } from "../interfaces/links"

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email:string = "verbsapp@gmail.com";
  links: Links[] = [
    {name: "Home",route: '/'},
    {name: "Dashboard",route: '/dashboard'},
    {name: "About",route: '/about'},
    {name: "Team",route: '/team'},
    {name: "Verbs",route: '/verbs'},
  ]
}
