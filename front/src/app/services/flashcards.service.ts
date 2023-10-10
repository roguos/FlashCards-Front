import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFlashcard } from '../interfaces/flashcard';

@Injectable({
  providedIn: 'root',
})
export class FlashcardsService {
  constructor(private http: HttpClient) {}

  data: IFlashcard[] = [];

  getflashcards() {
    this.http
      .get<IFlashcard[]>('http://localhost:3000/flashcards')
      .subscribe((dat) => {
        this.data = dat;
        console.log(this.data);
      });
  }
}
