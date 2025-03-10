import { Component, inject, Input} from '@angular/core';
import { ModalServicesService } from '../../../shared/services/modal-services.service';
import { VerbsService } from '../../../shared/services/verbs-service.service';
import { VerbById } from '../../interface';
import { AsyncPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { style } from '@angular/animations';
import { SpecialVerbs } from '../../interface/specialVerbs';

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
  specialVerbPresent: SpecialVerbs[] = [];
  specialVerbPast: SpecialVerbs[] = [];


  ngOnInit(): void{
    this.getVerbById(this.verb_id)
    // this.getVerbById("V9-BE-4411")
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
          
          const verb = result.verb.infinitive.split(" ");

          //Destructuring special verb: Be
          if(verb[1].toLowerCase() === "be"){
            //present
            const presentList = result.verb.present.split("-")
            const IPA_UK_presentList = result.verb.IPA_irregular_verbs?.ipa_present_uk.split(",");
            const IPA_US_presentList = result.verb.IPA_irregular_verbs?.ipa_present_us.split(",");
            this.specialVerbPresent = this.arryDestrcuturing(presentList,IPA_UK_presentList,IPA_US_presentList);
            //past
            const pastList = result.verb.past.split("-")
            const IPA_UK_pastList = result.verb.IPA_irregular_verbs?.ipa_past_uk.split(",");
            const IPA_US_pastList = result.verb.IPA_irregular_verbs?.ipa_past_us.split(",");
            this.specialVerbPast = this.arryDestrcuturing(pastList,IPA_UK_pastList,IPA_US_pastList);
          }else if(verb[1].toLowerCase() === "do"){
            const presentList = result.verb.present.split("-")
            const IPA_UK_presentList = result.verb.IPA_irregular_verbs?.ipa_present_uk.split(",");
            const IPA_US_presentList = result.verb.IPA_irregular_verbs?.ipa_present_us.split(",");
            this.specialVerbPresent = this.arryDestrcuturing(presentList,IPA_UK_presentList,IPA_US_presentList);
          }else if(verb[1].toLowerCase() === "have"){
            const presentList = result.verb.present.split("-")
            const IPA_UK_presentList = result.verb.IPA_irregular_verbs?.ipa_present_uk.split(",");
            const IPA_US_presentList = result.verb.IPA_irregular_verbs?.ipa_present_us.split(",");
            this.specialVerbPresent = this.arryDestrcuturing(presentList,IPA_UK_presentList,IPA_US_presentList);
          }else if(verb[1].toLowerCase() === "go"){
            const presentList = result.verb.present.split("-")
            const IPA_UK_presentList = result.verb.IPA_irregular_verbs?.ipa_present_uk.split(",");
            const IPA_US_presentList = result.verb.IPA_irregular_verbs?.ipa_present_us.split(",");
            this.specialVerbPresent = this.arryDestrcuturing(presentList,IPA_UK_presentList,IPA_US_presentList);
          }
          
          
          
        },
        error: e => {
          throw new Error(e.message);
        }
      })
  }

  arryDestrcuturing(verbList: string[],IPA_UK_list?: string[],IPA_US_list?: string[]){
    let new_list: SpecialVerbs[] = [];
    for (let i = 0; i < verbList.length; i++) {
      let verb = {
        verb: verbList[i],
        ipa_uk: IPA_UK_list?.[i],
        ipa_us: IPA_US_list?.[i], 
      }
      new_list.push(verb)
    }
    return new_list;
  }

}
