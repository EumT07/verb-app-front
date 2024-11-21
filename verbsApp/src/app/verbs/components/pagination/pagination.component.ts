import { Component, EventEmitter, Input, Output} from '@angular/core';


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
  @Output() nextPage = new EventEmitter<number>();
  @Output() previousPage = new EventEmitter<number>();
  @Output() pageSelected = new EventEmitter<number>();
  // @Output() upPage = new EventEmitter()


  ngOnInit(){
    const pagesCount = Math.ceil( this.totalPages / 30);
    this.pages = this.range(1, pagesCount);
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
}
