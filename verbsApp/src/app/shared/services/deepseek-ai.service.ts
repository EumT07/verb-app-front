import { inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs";
import { environment } from '../../../environment/environment.devolp';
import { AiInfo } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class DeepseekAiService {

  constructor() { }
  private readonly _http = inject(HttpClient)
  private readonly baseUrl = environment.back_Url


  getDeepseekData(verb: string | undefined){

    if(!verb){
      throw new Error("Verb is Undefined")
    }
    const url = `${this.baseUrl}/deepseek/api`;
    return this._http
    .post(url, {verb})
    .pipe(map((response: Object) => response as AiInfo))
  }
}
