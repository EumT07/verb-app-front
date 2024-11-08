import { Component } from '@angular/core';
import { Route, RouterLink } from '@angular/router';
import { SearchEmailComponent } from '../search-email/search-email.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, 
    // SearchEmailComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export default class LoginComponent {
  modal: boolean = false
  constructor(
    private _matDialog: MatDialog
  ){}

  openModal() {
    this._matDialog.open(SearchEmailComponent, {
      width: "350px",
      height: "200px"
    })
  }
}
