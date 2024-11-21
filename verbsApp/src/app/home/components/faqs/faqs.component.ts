import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [],
  templateUrl: './faqs.component.html',
  styleUrl: './faqs.component.css'
})
export class FaqsComponent {

  questions = [
    {
      question: "Is VerbsApp free?",
      answer: "For the moment this website is completely free, you can use it, but the resources will be limited because all processes (Hosting, DNS, cloud data) that help this page works correctly are expensive so it could work or not, so if you like this project and want to support us you can buy us a coffe, this support will be use for help this project to grow up "
    },
    {
      question: "How many verbs are there in this website?",
      answer: "For the moment we have around 366 verbs including Regular and Irregular Verbs, we are working very hard to include more verbs."
    },
    {
      question: "When are you going to include phrasal verbs?",
      answer: "We are working on it, so it questions of time to include them in the page."
    }
  ]

  ngOnInit(){
    this.activeFaqs()
  }
  
  activeFaqs(){
    if(typeof document !== "undefined"){
      const questions = document.querySelectorAll(".article-questions");
    
    questions.forEach((ele) => {
      const btn = ele.querySelector(".question-btn");

      btn?.addEventListener("click", ()=> {
        questions.forEach(item => {
          if(item !== ele){
            item.classList.remove("show-text")
          }
        });
        
        ele.classList.toggle("show-text");
  
      })
    })
    }
  }
}
