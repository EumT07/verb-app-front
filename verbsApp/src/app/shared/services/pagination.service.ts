import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {
  private totalPages = new BehaviorSubject<number>(1);
  private limitPage = new BehaviorSubject<number>(1);

  $pages = this.totalPages.asObservable();
  $limit = this.limitPage.asObservable();


  constructor() { }
  changeValues(newTotalPages: number,newLimit: number){
    this.totalPages.next(newTotalPages);
    this.limitPage.next(newLimit);
  }
}
