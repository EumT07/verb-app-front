import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../shared/layout';
import { SearchComponent } from "../../components/search/search.component";
import { Verbs } from '../../interface/verbs';
import { VerbComponent } from "../../components/verb/verb.component";
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { irregularVerbs } from '../../interface';
import { IrregularVerbComponent } from "../../components/irregular-verb/irregular-verb.component";
import { VerbsService } from '../../../shared/services/verbs-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-irregular-verbs',
  standalone: true,
  imports: [HeaderComponent, SearchComponent, ButtonsComponent, PaginationComponent, IrregularVerbComponent],
  templateUrl: './irregular-verbs.component.html',
  styleUrl: './irregular-verbs.component.css'
})
export default class IrregularVerbsComponent {
  verbs: irregularVerbs[] = []
  verb_loading: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  totalPages = 1;


  private readonly verbService = inject(VerbsService)
  private readonly router = inject(Router)
  
  ngOnInit(){
      const page = 1
      const limit = 30
      this.verbService.getIrregularVerbs({page, limit})
      // .subscribe(result => this.verbs = result.irregularVerbs)
      .subscribe({
        next: result => { 
          this.verbs = result.irregularVerbs;
          this.totalPages = result.metaData.totalRegisters;
          console.log(this.totalPages);
        },
        error: e => {
            this.router.navigate(["/error/server"])
            throw new Error(e.message);
        }
    })
  }
}

