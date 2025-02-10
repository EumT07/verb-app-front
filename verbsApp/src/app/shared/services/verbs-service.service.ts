import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs';
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
    .pipe(map((response: Object) => response as VerbsResponse ))
  }

  getRegularVerbs({page, limit}: Pagination){
    const url = `${this.baseURL}/verbs/regular?page=${page}&limit=${limit}`
    return this._http
    .get(url)
    .pipe(map((response: Object) => response as RegularVerbsResponse ))
  }

  getIrregularVerbs({page, limit}: Pagination){
    const url = `${this.baseURL}/verbs/irregular?page=${page}&limit=${limit}`
    return this._http.get(url)
    .pipe(map((response: Object) => response as IrregularVerbsResponse ))
  }

  getVerbById(id: string | undefined){
    const url = `${this.baseURL}/verbs/${id}`
    return this._http
    .get(url)
    .pipe(map((response: Object) => response as VerbById))
  }

  getAllVerbsBySearch(word: string, {page, limit}: Pagination){
    const url = `${this.baseURL}/verbs/search/${word}?page=${page}&limit=${limit}`
    return this._http
    .get(url)
    .pipe(map((response: Object) => response as VerbByWord))
  }

  getRegularVerbsBySearch(word: string, {page, limit}: Pagination){
    const url = `${this.baseURL}/verbs/search/regular/${word}?page=${page}&limit=${limit}`
    return this._http
    .get(url)
    .pipe(map((response: Object) => response as VerbByWord))
  }
  getIrregularVerbsBySearch(word: string, {page, limit}: Pagination){
    const url = `${this.baseURL}/verbs/search/irregular/${word}?page=${page}&limit=${limit}`
    return this._http
    .get(url)
    .pipe(map((response: Object) => response as VerbByWord))
  }

}
