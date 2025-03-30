import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environment/environment.devolp';
import { Pagination, VerbsResponse, RegularVerbsResponse, IrregularVerbsResponse, VerbById, VerbByWord } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class VerbsService {

  private readonly _http = inject(HttpClient)
  private baseURL = environment.back_Url

  getAllVerbs({page, limit}: Pagination){
    const url = `${this.baseURL}/verbs?page=${page}&limit=${limit}`
    return this._http
    .get(url)
    .pipe(
      map((response: Object) => response as VerbsResponse ),
      catchError((error) => {
        return throwError(() => error); // Propaga el error para manejarlo en el componente
      })
    )
    
  }

  getRegularVerbs({page, limit}: Pagination){
    const url = `${this.baseURL}/verbs/regular?page=${page}&limit=${limit}`
    return this._http
    .get(url)
    .pipe(
      map((response: Object) => response as RegularVerbsResponse ),
      catchError((error) => {
        return throwError(() => error); // Propaga el error para manejarlo en el componente
      })
    )
  }

  getIrregularVerbs({page, limit}: Pagination){
    const url = `${this.baseURL}/verbs/irregular?page=${page}&limit=${limit}`
    return this._http.get(url)
    .pipe(
      map((response: Object) => response as IrregularVerbsResponse ),
      catchError((error) => {
        return throwError(() => error); // Propaga el error para manejarlo en el componente
      })
    )
  }

  getVerbById(id: string | undefined){
    const url = `${this.baseURL}/verbs/${id}`
    return this._http
    .get(url)
    .pipe(
      map((response: Object) => response as VerbById),
      catchError((error) => {
        return throwError(() => error); // Propaga el error para manejarlo en el componente
      })
    )
  }

  getAllVerbsBySearch(word: string, {page, limit}: Pagination){
    const url = `${this.baseURL}/verbs/search/${word}?page=${page}&limit=${limit}`
    return this._http
    .get(url)
    .pipe(
      map((response: Object) => response as VerbByWord),
      catchError((error) => {
      return throwError(() => error); // Propaga el error para manejarlo en el componente
    }))
  }

  getRegularVerbsBySearch(word: string, {page, limit}: Pagination){
    const url = `${this.baseURL}/verbs/search/regular/${word}?page=${page}&limit=${limit}`
    return this._http
    .get(url)
    .pipe(
      map((response: Object) => response as VerbByWord),
      catchError((error) => {
        return throwError(() => error); // Propaga el error para manejarlo en el componente
      })
    )
  }
  getIrregularVerbsBySearch(word: string, {page, limit}: Pagination){
    const url = `${this.baseURL}/verbs/search/irregular/${word}?page=${page}&limit=${limit}`
    return this._http
    .get(url)
    .pipe(
      map((response: Object) => response as VerbByWord),
      catchError((error) => {
        return throwError(() => error); // Propaga el error para manejarlo en el componente
      })
    )
  }

}
