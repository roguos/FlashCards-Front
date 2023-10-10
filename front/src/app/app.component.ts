import { Component, OnInit } from '@angular/core';
import { FlashcardsService } from './services/flashcards.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private flascardsService: FlashcardsService){}
  ngOnInit(): void {
    this.flascardsService.getflashcards()
  }
}
