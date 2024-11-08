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

@Component({
  selector: 'app-regular-verbs',
  standalone: true,
  imports: [HeaderComponent, SearchComponent, ButtonsComponent, PaginationComponent, RegularVerbComponent],
  templateUrl: './regular-verbs.component.html',
  styleUrl: './regular-verbs.component.css'
})
export default class RegularVerbsComponent {
  verbs: regularVerbs[] = []
  verb_loading: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  totalPages = 1;


  private readonly verbService = inject(VerbsService)
  private readonly router = inject(Router)
  
    ngOnInit(){
        const page = 1
        const limit = 30
        this.verbService.getRegularVerbs({page, limit})
        // .subscribe(result => this.verbs = result.regularVerbs)
        .subscribe({
          next: result => { 
            this.verbs = result.regularVerbs;
            this.totalPages = result.metaData.totalRegisters;
            console.log(this.totalPages);
    
          },
          error: e => {
              console.log(e.message);
              this.router.navigate(["/error/server"])
              throw new Error(e.message);
          }
      })
    }
}
