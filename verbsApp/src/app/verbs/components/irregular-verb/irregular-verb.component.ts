import { Component,Input } from '@angular/core';
import { irregularVerbs } from '../../interface';

@Component({
  selector: 'app-irregular-verb',
  standalone: true,
  imports: [],
  templateUrl: './irregular-verb.component.html',
  styleUrl: './irregular-verb.component.css'
})
export class IrregularVerbComponent {
  @Input() verbs: irregularVerbs[] = []
  @Input() verb_loading: number[] = []
}
