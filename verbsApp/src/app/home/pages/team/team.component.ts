import { Component } from '@angular/core';
import { HeaderComponent } from "../../../shared/layout/header/header.component";
import { FooterComponent } from "../../../shared/layout/footer/footer.component";
import { TeamCardComponent } from "../../components/team-card/team-card.component";

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, TeamCardComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export default class TeamComponent {

}
