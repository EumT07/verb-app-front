import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Links } from '../../interfaces/links';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  links: Links[] = [
    {name: "Home",route: '#home'},
    {name: "About",route: '#about'},
    {name: "Team",route: '#team'},
    {name: "FAQs",route: '#faqs'},
    {name: "Verbs",route: '/verbs'},
  ]

  isDarkMode = false;
  isMenuOpen = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
}
