import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeLocalstorageService {

  private darkModeKey = "dark-mode-active"

  getDarkMode(){
    if(window.localStorage){
      const data: any = window.localStorage.getItem(this.darkModeKey);
      return JSON.parse(data);
    }
  }

  setdarkMode(value: boolean){
    if(window.localStorage){
      window.localStorage.setItem(this.darkModeKey, value.toString());
    }
  }
}
