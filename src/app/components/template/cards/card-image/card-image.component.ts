import { Component } from '@angular/core';
import { FlashcardsService } from 'src/app/service/flashcards.service';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.css'],
})
export class CardImageComponent {
  constructor(public cardsService: FlashcardsService) {}
  mostrar() {
    this.cardsService.getflashcards();
  }
}
