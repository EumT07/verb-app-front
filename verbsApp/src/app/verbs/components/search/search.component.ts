import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output() data = new EventEmitter<string>();

  searchVerb(event: KeyboardEvent){
    const word = (event.target as HTMLInputElement).value;
    this.data.emit(word)
  }

  
}
