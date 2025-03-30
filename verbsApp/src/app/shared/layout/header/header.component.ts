import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Links } from '../../interfaces/links';
import { DarkModeLocalstorageService } from '../../services/dark-mode-localstorage.service';

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
    // {name: "About",route: '#about'},
    // {name: "Team",route: '#team'},
    // {name: "FAQs",route: '#faqs'},
    {name: "Verbs",route: '/verbs'},
  ]

  isDarkMode = false;
  isMenuOpen = false;
  // private readonly darkModeValue = inject(DarkModeLocalstorageService)

  constructor(){
    // this.checkDarkLocalStorage();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;

    // if(this.isDarkMode){
    //   this.darkModeValue.setdarkMode(this.isDarkMode);
    // }else{
    //   this.darkModeValue.setdarkMode(this.isDarkMode);
    // }

    // document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    
  }

  // checkDarkLocalStorage() {
  //   if(typeof window !== 'undefined'){
  //     this.isDarkMode = this.darkModeValue.getDarkMode();
  //     document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  //   }
    
  // }

}
