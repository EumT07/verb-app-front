import { Component, inject, Input} from '@angular/core';
import { ModalServicesService } from '../../../shared/services/modal-services.service';
import { VerbsService } from '../../../shared/services/verbs-service.service';
import { VerbById } from '../../interface';
import { AsyncPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { style } from '@angular/animations';

@Component({
  selector: 'app-verb-modal',
  standalone: true,
  imports: [UpperCasePipe],
  templateUrl: './verb-modal.component.html',
  styleUrl: './verb-modal.component.css'
})
export class VerbModalComponent {
  @Input() verb_id?: string;
  verbDetail?: VerbById;
  private readonly modalEvent = inject(ModalServicesService)
  private readonly verb = inject(VerbsService)
  isOpen: boolean = false;


  ngOnInit(): void{
    this.getVerbById(this.verb_id)
    // this.getVerbById("V6-ACC-4502")
  }

  closeModal(){
    this.modalEvent.$modal.emit(false)
  }

  openVerbContainer(div:any){
    (div as HTMLElement).classList.toggle("active")
  }
  
  getVerbById(id:string | undefined){
    this.verb.getVerbById(id)
      .subscribe({
        next: result => {
          this.verbDetail = result.verb;
          
        },
        error: e => {
          throw new Error(e.message);
        }
      })
  }



}
