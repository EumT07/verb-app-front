import { Injectable} from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  screenWidth: number = 0;
  value: number = 0;
  constructor(

  ) { }

  
  screenSize(): number {

    this.value = this.onResize();
    if (this.value <= 560){
      return  60;
    }else{
      return 30;
    }
  }

  onResize(){
    if(typeof window !== "undefined"){
      this.screenWidth = window.innerWidth;
      if(this.screenWidth <= 560){
        return this.screenWidth;
      }else{
        return this.screenWidth;
      }
    }
    return this.screenWidth;
  }

}
