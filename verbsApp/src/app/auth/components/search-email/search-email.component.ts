import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-search-email',
  standalone: true,
  imports: [],
  templateUrl: './search-email.component.html',
  styleUrl: './search-email.component.css'
})
export class SearchEmailComponent {
  constructor(
    public _matDialogRef: MatDialogRef<SearchEmailComponent>
  ) {
    
  }
}
