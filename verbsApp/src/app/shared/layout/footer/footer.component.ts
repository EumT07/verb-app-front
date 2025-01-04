import { Component } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { Links } from "../../interfaces/links"
import { TranslationService } from '../../services/translation.service';
import { LanguageSelectorComponent } from "../../components/language-selector/language-selector.component";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LanguageSelectorComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email:string = "verbsapp@gmail.com";
  address:string = "Anzoátegui - Venezuela";
  phone:string = "+58 4248182793"
  links: Links[] = [
    {name: "Home",route: '#home'},
    {name: "About",route: '#about'},
    {name: "Team",route: '#team'},
    {name: "FAQs",route: '#faqs'},
    {name: "Verbs",route: '/verbs'},
  ]

  constructor(
    private translationService: TranslationService
  ){}

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
