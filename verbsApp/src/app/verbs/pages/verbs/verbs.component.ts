import { Component, inject,EventEmitter, Output} from '@angular/core';
import { HeaderComponent } from '../../../shared/layout';
import { SearchComponent } from "../../components/search/search.component";
import { Verbs, SpecialVerbs} from '../../interface';
import { VerbComponent } from "../../components/verb/verb.component";
import { ButtonsComponent } from "../../components/buttons/buttons.component";
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { VerbsService } from '../../../shared/services/verbs-service.service';
import { Router } from '@angular/router';
import { ScreenService } from '../../../shared/services/screen.service';
import { PaginationService } from '../../../shared/services/pagination.service';
import { VerbNotFoundComponent } from "../../../shared/layout/errors/pages/verb-not-found/verb-not-found.component";


@Component({
    selector: 'app-verbs',
    standalone: true,
    imports: [HeaderComponent, SearchComponent, VerbComponent, ButtonsComponent, PaginationComponent, VerbNotFoundComponent],
    templateUrl: './verbs.component.html',
    styleUrl: './verbs.component.css'
})
export default class VerbsComponent {

    verbs: Verbs[] = []
    verb_loading: number[] = [...Array(20).keys()].map((el) => el + 1)
    page: number = 1
    currentPage: number = 1
    limit: number = 60
    totalPages = 1;
    lastPage: number = 0
    specialVerbPresent: SpecialVerbs[] = [];

    private readonly verbService = inject(VerbsService)
    private readonly router = inject(Router)
    // private readonly screenWidth = inject(ScreenService)
    // private readonly pagination = inject(PaginationService)
  
  
    ngOnInit(){
        // this.limit = this.screenWidth.screenSize();
        this.getAllVerbs(this.page, this.limit);        
    }
    
    getAllVerbs(page: number, limit: number){
        this.verbService.getAllVerbs({page, limit})
        // .subscribe(result => this.verbs = result.verbs)
        .subscribe({
            next: result => { 
                this.verbs = result.verbs
                this.totalPages = result.metaData.totalRegisters;
                this.lastPage = result.metaData.lastPage;
                // this.pagination.changeValues(result.metaData.totalRegisters,this.limit);
            },
            error: e => {
                console.log(e.message);
                return this.router.navigate(["/server"]);
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

    getVerbsSearched(word: string){
        let page = this.page;
        let limit = this.limit;        
        if(word.length > 0){
            this.verbService.getAllVerbsBySearch(word,{page, limit})
            .subscribe({
                next: result => {
                    this.verbs = result.verbs
                    // this.totalPages = result.metaData.totalRegisters;
                    // this.lastPage = result.metaData.lastPage;
                    // this.pagination.changeValues(result.metaData.totalRegisters,this.limit)
                },error: e => {
                    console.log(e.message);
                    return this.router.navigate(["/server"]);
                }
            })
        }else{
            return this.getAllVerbs(page,limit)
        }     
    }

    
}
