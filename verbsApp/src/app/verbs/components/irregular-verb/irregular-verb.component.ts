import { Component,inject,Input } from '@angular/core';
import { irregularVerbs } from '../../interface';
import { ModalServicesService } from '../../../shared/services/modal-services.service';
import { VerbModalComponent } from "../verb-modal/verb-modal.component";
import { ArrayTransformPipe } from "../../pipes/array-transform.pipe";

@Component({
  selector: 'app-irregular-verb',
  standalone: true,
  imports: [VerbModalComponent, ArrayTransformPipe],
  templateUrl: './irregular-verb.component.html',
  styleUrl: './irregular-verb.component.css'
})
export class IrregularVerbComponent {
  modalActive?: boolean;
  verbId?: string;
  @Input() verbs: irregularVerbs[] = []
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
