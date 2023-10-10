import { Component } from '@angular/core';
import { IFlashcard } from 'src/app/interfaces/flashcard';
import { FlashcardsService } from 'src/app/services/flashcards.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(public FCService: FlashcardsService) {}
  arrayLocal: IFlashcard[] = [
    { id: 0, title: '', tip: '', text: '', topic: '' },
  ];
}
