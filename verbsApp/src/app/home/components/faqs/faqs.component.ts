import { Component, inject } from '@angular/core';
import { TranslationService } from "../../../shared/services/translation.service"

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {

  faqs = [
    {
      question: 'question1',
      answer: 'answer1',
      isOpen: false
    },
    // {
    //   question: 'question2',
    //   answer: 'answer2',
    //   isOpen: false
    // },
    {
      question: 'question3',
      answer: 'answer3',
      isOpen: false
    },
    // {
    //   question: 'question4',
    //   answer: 'answer4',
    //   isOpen: false
    // },
    {
      question: 'question5',
      answer: 'answer5',
      isOpen: false
    },
    {
      question: 'question6',
      answer: 'answer6',
      isOpen: false
    },
    {
      question: 'question7',
      answer: 'answer7',
      isOpen: false
    },
    {
      question: 'question8',
      answer: 'answer8',
      isOpen: false
    }
  ];

  translate_fqs: [] = []

  private readonly translateService = inject(TranslationService); 

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

  translate(key: string){
    return this.translateService.translate(key);
  }

}
