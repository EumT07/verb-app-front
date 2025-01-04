import { Component, OnInit } from '@angular/core';
import {
  FooterComponent,
  HeaderComponent
} from "../../../shared/layout";
import { RouterLink } from '@angular/router';
import { FaqsComponent } from '../../components/faqs/faqs.component';
import { HeaderSectionComponent } from "../../components/header-section/header-section.component";
import { AboutSectionComponent } from "../../components/about-section/about-section.component";
import { TeamSectionComponent } from "../../components/team-section/team-section.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FaqsComponent, HeaderSectionComponent, AboutSectionComponent, TeamSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export default class HomePageComponent {
  
  
  

  
}
