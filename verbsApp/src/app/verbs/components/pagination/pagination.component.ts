import { Component, EventEmitter, Input, Output, inject} from '@angular/core';
import { ScreenService } from '../../../shared/services/screen.service';
import { VerbByWord } from '../../interface';


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
  value: number = 0;
  // @Output() upPage = new EventEmitter()
  private readonly screenWidth = inject(ScreenService)

  ngOnInit(){
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
      this.value = this.screenWidth.screenSize();
      if( this.value == 60){
        const pagesCount = Math.ceil( this.totalPages / this.limit);
        this.pages = this.range(1, pagesCount);
      }else{
        const pagesCount = Math.ceil( this.totalPages / this.limit);
        this.pages = this.range(1, pagesCount);
    }

  }

  
}
