import { Component, Input } from '@angular/core';
import { regularVerbs } from '../../interface';

@Component({
  selector: 'app-regular-verb',
  standalone: true,
  imports: [],
  templateUrl: './regular-verb.component.html',
  styleUrl: './regular-verb.component.css'
})
export class RegularVerbComponent {
  @Input() verbs: regularVerbs[] = []
  @Input() verb_loading: number[] = []
}
