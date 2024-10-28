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
      answer: "For the moment this website is completely free, you can use it, but the resources will be limited because all processes (Hosting, sending Emails, cloud data) that help this page work correctly are expensive so it could work or not, so if you like this project and wants to support us you can buy us a coffe, this support will be use for help this project to grow up "
    },
    {
      question: "How many verbs are there in this website?",
      answer: "For the moment we have around 366 verbs including Regular and Irregular Verbs, we are working very hard to include Phrasal Verbs, in order to increase our data"
    },
    {
      question: "What happens to my data when I delete my account?",
      answer: "When you delete your account, all your progress will be deleted as soon as possible automatically."
    },
    {
      question: "What technology did you use for this project?",
      answer: "For backend: We are using Nest Js, for Frontend: we are using angular."
    }
  ]

  

}
