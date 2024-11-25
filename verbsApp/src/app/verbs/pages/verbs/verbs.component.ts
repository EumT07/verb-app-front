import { Component, inject, } from '@angular/core';
import { HeaderComponent } from '../../../shared/layout';
import { SearchComponent } from "../../components/search/search.component";
import { Verbs } from '../../interface/index';
import { VerbComponent } from "../../components/verb/verb.component";
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { VerbsService } from '../../../shared/services/verbs-service.service';
import { Router } from '@angular/router';
import { VerbModalComponent } from "../../components/verb-modal/verb-modal.component";


@Component({
    selector: 'app-verbs',
    standalone: true,
    imports: [HeaderComponent, SearchComponent, VerbComponent, ButtonsComponent, PaginationComponent],
    templateUrl: './verbs.component.html',
    styleUrl: './verbs.component.css'
})
export default class VerbsComponent {

    verbs: Verbs[] = []
    verb_loading: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
    page: number = 1
    currentPage: number = 1
    limit: number = 30
    totalPages = 1;
    lastPage: number = 0

    private readonly verbService = inject(VerbsService)
    private readonly router = inject(Router)
  
    ngOnInit(){
        this.getAllVerbs(this.page, this.limit)
    }


    getAllVerbs(page: number, limit: number){
        this.verbService.getAllVerbs({page, limit})
        // .subscribe(result => this.verbs = result.verbs)
        .subscribe({
            next: result => { 
                this.verbs = result.verbs
                this.totalPages = result.metaData.totalRegisters;
                this.lastPage = result.metaData.lastPage
            },
            error: e => {
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
        this.getAllVerbs(this.currentPage, this.limit)
    }

    previousPage(){
        if(this.currentPage > 1){
            this.currentPage -= 1
        }
        this.getAllVerbs(this.currentPage, this.limit)
    }

    pageSelected(page:number){
        this.currentPage = page
        this.getAllVerbs(page, this.limit)
    }

}
