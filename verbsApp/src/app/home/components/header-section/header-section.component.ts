import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../../shared/services/translation.service';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.css'
})
export class HeaderSectionComponent {
  private readonly translationService = inject(TranslationService);

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
