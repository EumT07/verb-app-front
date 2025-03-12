import { Component } from '@angular/core';import { HeaderComponent,FooterComponent } from '../../../shared/layout';
import { SearchComponent } from "../../components/search/search.component";
import { Verbs } from '../../interface';
import { VerbComponent } from "../../components/verb/verb.component";
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { VerbNotFoundComponent } from "../../../shared/layout/errors/pages/verb-not-found/verb-not-found.component";

@Component({
  selector: 'app-phrasal-verbs',
  standalone: true,
  imports: [HeaderComponent, SearchComponent, VerbComponent, ButtonsComponent, PaginationComponent, VerbNotFoundComponent],
  templateUrl: './phrasal-verbs.component.html',
  styleUrl: './phrasal-verbs.component.css'
})
export default class PhrasalVerbsComponent {
  verbs: Verbs[] = []
  verb_loading: number[] = [...Array(20).keys()].map((el) => el + 1)
  page: number = 1
  currentPage: number = 1
  limit: number = 30
  totalPages = 1;
  lastPage: number = 0


  // nextPage(){        
  //   this.currentPage += 1
  //   if(this.currentPage >= this.lastPage){
  //       this.currentPage = this.lastPage;
  //   }
    
  // }

  // previousPage(){
  //     if(this.currentPage > 1){
  //         this.currentPage -= 1
  //     }
    
  // }

  // pageSelected(page:number){
  //     this.currentPage = page
    
  // }
}
