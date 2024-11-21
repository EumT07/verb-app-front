import { Component, OnInit } from '@angular/core';
import {
  FooterComponent,
  HeaderComponent
} from "../../../shared/layout";
import { RouterLink } from '@angular/router';
import { Verbs } from '../interface/verbs';
import { FaqsComponent } from '../../components/faqs/faqs.component';


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterLink,FaqsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export default class HomePageComponent {
  
  verbsList: Verbs[] = [
    {
      verb: "TO BOIL",
      ipa_uk: "/bɔɪl/",
      ipa_us: "/bɔɪl/",
      def: "The temperature at which a liquid starts to turn into a gas",
      exp: "I've boiled some potatoes for dinner."
    },
    {
      verb: "TO COMB",
      ipa_uk: "/kəʊm/",
      ipa_us: "/koʊm/",
      def: "to tidy your hair using a comb",
      exp: "She combed her hair and put on some lipstick."
    },
    {
      verb: "TO EAT",
      ipa_uk: "/iːt/",
      ipa_us: "/iːt/",
      def: "to put or take food into the mouth",
      exp: "Do you eat meat?"
    }
  ]

  verb_loading: number[] = [1,2,3]

  

  
}
