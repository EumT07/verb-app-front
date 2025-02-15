import { Component, inject } from '@angular/core';
import { HeaderComponent,FooterComponent } from '../../../shared/layout';
import { SearchComponent } from "../../components/search/search.component";
import { VerbComponent } from "../../components/verb/verb.component";
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { regularVerbs } from '../../interface';
import { RegularVerbComponent } from "../../components/regular-verb/regular-verb.component";
import { VerbsService } from '../../../shared/services/verbs-service.service';
import { Router } from '@angular/router';
import { ScreenService } from '../../../shared/services/screen.service';

@Component({
  selector: 'app-regular-verbs',
  standalone: true,
  imports: [HeaderComponent, SearchComponent, ButtonsComponent, PaginationComponent, RegularVerbComponent],
  templateUrl: './regular-verbs.component.html',
  styleUrl: './regular-verbs.component.css'
})
export default class RegularVerbsComponent {
  verbs: regularVerbs[] = []
  verb_loading: number[] = [...Array(20).keys()].map((el) => el + 1)
  page: number = 1;
  limit: number = 0;
  totalPages: number = 1;
  currentPage: number = 1;
  lastPage: number = 0;


  private readonly verbService = inject(VerbsService)
  private readonly router = inject(Router)
  private readonly screenWidth = inject(ScreenService)
  
  
    ngOnInit(){
      this.limit = this.screenWidth.screenSize();
        this.regularVerbs(this.page, this.limit)
    }

    regularVerbs(page: number, limit: number){
      this.verbService.getRegularVerbs({page, limit})
        // .subscribe(result => this.verbs = result.regularVerbs)
        .subscribe({
          next: result => { 
            this.verbs = result.regularVerbs;
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
      this.regularVerbs(this.currentPage, this.limit)
  }

    previousPage(){
        if(this.currentPage > 1){
          this.currentPage -= 1
        }
        this.regularVerbs(this.currentPage, this.limit)
    }

    pageSelected(page:number){
        this.currentPage = page
        this.regularVerbs(page, this.limit)
    }
}
