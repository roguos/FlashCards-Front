import { Component, OnInit } from '@angular/core';
import { IFlashcard } from 'src/app/interfaces/flashcard';
import { FlashcardsService } from 'src/app/services/flashcards.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  permission: boolean = true;
  permission1: boolean = false;
  permission2: boolean = false;
  permission3: boolean = false;
  focus1: boolean = true;
  focus2: boolean = false;
  focus3: boolean = false;

  handleChecked(arg1: number) {
    if (arg1 == 1) {
      this.focus1 = true;
      this.focus2 = false;
      this.focus3 = false;
    }
    if (arg1 == 2) {
      this.focus1 = false;
      this.focus2 = true;
      this.focus3 = false;
    }
    if (arg1 == 3) {
      this.focus1 = false;
      this.focus2 = false;
      this.focus3 = true;
    }
  }
  localFlashcards: IFlashcard[] = [];
  constructor(public FCService: FlashcardsService) {}
  ngOnInit(): void {
    this.FCService.flashcards.subscribe((data) => {
      this.localFlashcards = data;
    });
  }
}
