import { Component, EventEmitter, inject, Output } from '@angular/core';
import { VerbsService } from '../../../shared/services/verbs-service.service';
import { VerbByWord } from '../../interface/index';
import { Router } from '@angular/router';

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
