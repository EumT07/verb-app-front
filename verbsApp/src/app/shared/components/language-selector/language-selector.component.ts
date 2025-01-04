import { Component } from '@angular/core';
import { TranslationService } from '../../services/translation.service'

@Component({
  selector: 'app-language-selector',
  standalone: true,
  imports: [],
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.css'
})
export class LanguageSelectorComponent {
  languages = [
    {
      code: 'en',
      name: 'English',
      flag: 'https://flagcdn.com/w40/gb.png'
    },
    {
      code: 'es',
      name: 'Español',
      flag: 'https://flagcdn.com/w40/es.png'
    },
    {
      code: 'pt',
      name: 'Português',
      flag: 'https://flagcdn.com/w40/br.png'
    }
  ];

  currentLang = 'en';
  isOpen = false;

  constructor(private translationService: TranslationService) {
    this.currentLang = this.translationService.getCurrentLang();
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectLanguage(lang: string) {
    this.currentLang = lang;
    this.translationService.setLanguage(lang);
    this.isOpen = false;
  }

  getCurrentFlag() {
    return this.languages.find(lang => lang.code === this.currentLang)?.flag;
  }

  getCurrentName() {
    return this.languages.find(lang => lang.code === this.currentLang)?.name;
  }
}
