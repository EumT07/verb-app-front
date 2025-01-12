import { Component, inject } from '@angular/core';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.css'
})
export class AboutSectionComponent {
private readonly translationService = inject(TranslationService);

translate(key: string): string {
  return this.translationService.translate(key);
}
}
