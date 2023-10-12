import { Component } from '@angular/core';
import { IFlashcard } from 'src/app/interfaces/flashcard';
import { FlashcardsService } from 'src/app/services/flashcards.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  constructor(public FCService: FlashcardsService) {}
  localFlashcards: IFlashcard[] = [];
  onInit() {
    this.FCService.flashcards.subscribe((data) => {
      this.localFlashcards = data;
    });
  }
}
