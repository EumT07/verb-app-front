import { Component, EventEmitter, Input, Output, inject} from '@angular/core';
import { ScreenService } from '../../../shared/services/screen.service';
import { VerbByWord } from '../../interface';
import { PaginationService } from '../../../shared/services/pagination.service';


@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Input() totalPages: number = 1
  @Input() currentPage?: number = 1
  pages: number[] = []
  @Input() limit: number = 0
  @Output() nextPage = new EventEmitter<number>();
  @Output() previousPage = new EventEmitter<number>();
  @Output() pageSelected = new EventEmitter<number>();
  screenValue: number = 0;

  
  private readonly screenWidthService = inject(ScreenService)
  // private readonly paginationService = inject(PaginationService);

  ngOnInit(){
    // this.paginationService.pages.subscribe(
    //   value => this.totalPages = value
    // );
    // this.paginationService.limit.subscribe(
    //   value => this.limit = value
    // );
  
    this.OnResize()

  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }

  upPage(){
    if (typeof window !== 'undefined') {
        // Browser-specific code, like scrolling to the top
        window.scrollTo(0, 0);
    }
  }

  OnResize(){
      this.screenValue = this.screenWidthService.screenSize();
      if( this.screenValue == 60){
        const pagesCount = Math.ceil( this.totalPages / this.limit);
        this.pages = this.range(1, pagesCount);
      }else{
        const pagesCount = Math.ceil( this.totalPages / this.limit);
        this.pages = this.range(1, pagesCount);
    }

  }

  // reload(){
  //   console.log("Hooolaaa");
    
  // }
  
}
