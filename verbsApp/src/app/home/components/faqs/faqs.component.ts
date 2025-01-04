import { Component } from '@angular/core';

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
      question: 'How long does it take to learn English verbs?',
      answer: 'The learning process varies for each individual, but with consistent practice using our platform, most students see significant improvement within 2-3 months.',
      isOpen: false
    },
    {
      question: 'Do you offer personalized learning plans?',
      answer: 'Yes! Our AI-powered system creates a customized learning path based on your current level, goals, and learning style.',
      isOpen: false
    },
    {
      question: 'Can I access the platform on mobile devices?',
      answer: 'Absolutely! Our platform is fully responsive and works seamlessly on smartphones, tablets, and desktop computers.',
      isOpen: false
    },
    {
      question: 'Are there native speakers available for practice?',
      answer: 'Yes, we have a team of certified native English teachers available for live practice sessions and pronunciation guidance.',
      isOpen: false
    },
    {
      question: "Is VerbsApp free?",
      answer: "For the moment this website is completely free, you can use it, but the resources will be limited because all processes (Hosting, DNS, cloud data) that help this page works correctly are expensive so it could work or not, so if you like this project and want to support us you can buy us a coffe, this support will be use for help this project to grow up ",
      isOpen: false
    },
    {
      question: "How many verbs are there in this website?",
      answer: "For the moment we have around 366 verbs including Regular and Irregular Verbs, we are working very hard to include more verbs.",
      isOpen: false
    },
    {
      question: "When are you going to include phrasal verbs?",
      answer: "We are working on it, so it questions of time to include them in the page.",
      isOpen: false
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }

}
