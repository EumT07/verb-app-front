import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../shared/layout';
import { SearchComponent } from "../../components/search/search.component";
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { irregularVerbs } from '../../interface';
import { IrregularVerbComponent } from "../../components/irregular-verb/irregular-verb.component";
import { VerbsService } from '../../../shared/services/verbs-service.service';
import { Router } from '@angular/router';
import { ScreenService } from '../../../shared/services/screen.service';
import { PaginationService } from '../../../shared/services/pagination.service';
import { VerbNotFoundComponent } from "../../../shared/layout/errors/pages/verb-not-found/verb-not-found.component";

@Component({
  selector: 'app-irregular-verbs',
  standalone: true,
  imports: [HeaderComponent, SearchComponent, ButtonsComponent, PaginationComponent, IrregularVerbComponent, VerbNotFoundComponent],
  templateUrl: './irregular-verbs.component.html',
  styleUrl: './irregular-verbs.component.css'
})
export default class IrregularVerbsComponent {
  verbs: irregularVerbs[] = []
  verb_loading: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  totalPages = 1;
  page: number = 1;
  limit: number = 30;
  currentPage: number = 1;
  lastPage: number = 0;


  private readonly verbService = inject(VerbsService)
  private readonly router = inject(Router)
  // private readonly screenWidth = inject(ScreenService)
  // private readonly pagination = inject(PaginationService)
  
  
  
  ngOnInit(){
    // this.limit = this.screenWidth.screenSize();
    this.irregularVerbs(this.page, this.limit)
  }

irregularVerbs(page: number, limit: number){
  this.verbService.getIrregularVerbs({page, limit})
    // .subscribe(result => this.verbs = result.regularVerbs)
    .subscribe({
      next: result => { 
        this.verbs = result.irregularVerbs;
        this.totalPages = result.metaData.totalRegisters;
        this.lastPage = result.metaData.lastPage;
      },
      error: e => {
          console.log(e.message);
          this.router.navigate(["/error/server"])
          throw new Error(e.message);
      }
  })
}

nextPage(){
  this.currentPage += 1
  if(this.currentPage >= this.lastPage){
      this.currentPage = this.lastPage;
  }
  this.irregularVerbs(this.currentPage, this.limit)
}

previousPage(){
    if(this.currentPage > 1){
      this.currentPage -= 1
    }
    this.irregularVerbs(this.currentPage, this.limit)
}

pageSelected(page:number){
    this.currentPage = page
    this.irregularVerbs(page, this.limit)
}

getVerbsSearched(word: string){ 
  let page = this.page;
  let limit = this.limit;        
  if(word.length > 0){
      this.verbService.getIrregularVerbsBySearch(word,{page, limit})
      .subscribe({
          next: result => {
              this.verbs = result.verbs
              // this.totalPages = result.metaData.totalRegisters;
              // this.lastPage = result.metaData.lastPage;
              // this.pagination.changeValues(result.metaData.totalRegisters,this.limit)
          }
      })
  }else{
      return this.irregularVerbs(page,limit)
  }     
}

}

