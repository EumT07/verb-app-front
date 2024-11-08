import { Component, Input} from '@angular/core';


@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {

  @Input() totalPages: number = 1
  pages: number[] = []

  ngOnInit(){
    const pagesCount = Math.ceil( this.totalPages / 30);
    this.pages = this.range(1, pagesCount);

  }

  range(start: number, end: number): number[] {
    return [...Array(end).keys()].map((el) => el + start);
  }

}
