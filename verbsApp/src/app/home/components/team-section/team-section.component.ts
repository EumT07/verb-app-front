import { Component } from '@angular/core';
import { TranslationService } from "../../../shared/services/translation.service"
@Component({
  selector: 'app-team-section',
  standalone: true,
  imports: [],
  templateUrl: './team-section.component.html',
  styleUrl: './team-section.component.css'
})
export class TeamSectionComponent {
  constructor(private translationService: TranslationService) {}

  translate(key: string): string {
    return this.translationService.translate(key);
  }
}
