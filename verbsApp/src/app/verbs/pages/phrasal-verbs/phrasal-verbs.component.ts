import { Component } from '@angular/core';import { HeaderComponent,FooterComponent } from '../../../shared/layout';
import { SearchComponent } from "../../components/search/search.component";
import { Verbs } from '../../interface';
import { VerbComponent } from "../../components/verb/verb.component";
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { PaginationComponent } from '../../components/pagination/pagination.component';

@Component({
  selector: 'app-phrasal-verbs',
  standalone: true,
  imports: [HeaderComponent, SearchComponent, VerbComponent, ButtonsComponent, PaginationComponent],
  templateUrl: './phrasal-verbs.component.html',
  styleUrl: './phrasal-verbs.component.css'
})
export default class PhrasalVerbsComponent {
  verbs: Verbs[] = []
  verb_loading: number[] = [1,2,3,4,5,6,7,8,9,10,11,12]
}
