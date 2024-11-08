import { Component, Input } from '@angular/core';
import { Verbs } from '../../interface';

@Component({
  selector: 'app-verb',
  standalone: true,
  imports: [],
  templateUrl: './verb.component.html',
  styleUrl: './verb.component.css'
})
export class VerbComponent {
  @Input() verbs: Verbs[] = []
  @Input() verb_loading: number[] = []
}
