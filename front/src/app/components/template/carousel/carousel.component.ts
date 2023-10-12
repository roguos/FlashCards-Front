import { Component, OnInit } from '@angular/core';
import { IFlashcard } from 'src/app/interfaces/flashcard';
import { FlashcardsService } from 'src/app/services/flashcards.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  localFlashcards: IFlashcard[] = [];
  focus1: boolean = true;
  focus2: boolean = false;
  focus3: boolean = false;
  constructor(public FCService: FlashcardsService) {}
  ngOnInit(): void {
    this.FCService.flashcards.subscribe((data) => {
      this.localFlashcards = data;
    });
  }
}
