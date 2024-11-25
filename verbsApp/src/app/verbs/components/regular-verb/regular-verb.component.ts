import { Component, inject, Input } from '@angular/core';
import { regularVerbs } from '../../interface';
import { ModalServicesService } from '../../../shared/services/modal-services.service';
import { VerbModalComponent } from "../verb-modal/verb-modal.component";

@Component({
  selector: 'app-regular-verb',
  standalone: true,
  imports: [VerbModalComponent],
  templateUrl: './regular-verb.component.html',
  styleUrl: './regular-verb.component.css'
})
export class RegularVerbComponent {
  modalActive?: boolean;
  verbId?: string;
  @Input() verbs: regularVerbs[] = []
  @Input() verb_loading: number[] = []
  private readonly modalEvent = inject(ModalServicesService)

  ngOnInit(){
    this.modalEvent.$modal.subscribe((value)=> this.modalActive = value)
  }

  openModal(id:string){
    this.modalActive = true;
    this.verbId = id;
    
  }
}
