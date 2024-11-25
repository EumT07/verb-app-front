import { Component, inject, Input } from '@angular/core';
import { Verbs } from '../../interface';
import { VerbModalComponent } from "../verb-modal/verb-modal.component";
import { ModalServicesService } from '../../../shared/services/modal-services.service';


@Component({
  selector: 'app-verb',
  standalone: true,
  imports: [VerbModalComponent],
  templateUrl: './verb.component.html',
  styleUrl: './verb.component.css'
})
export class VerbComponent {
  modalActive?: boolean;
  verbId?: string;
  @Input() verbs: Verbs[] = []
  @Input() verb_loading: number[] = []
  private readonly modalEvent = inject(ModalServicesService)
  constructor(){

  }

  ngOnInit(){
    this.modalEvent.$modal.subscribe((value)=> this.modalActive = value)
  }

  openModal(id:string){
    this.modalActive = true;
    this.verbId = id;
  }

}
