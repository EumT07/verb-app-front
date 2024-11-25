import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalServicesService {

  constructor() { }

  $modal = new EventEmitter<any>();
}
