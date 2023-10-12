import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFlashcard } from '../interfaces/flashcard';

@Injectable({
  providedIn: 'root',
})
export class FlashcardsService {
  constructor(private http: HttpClient) {}
  get flashcards() {
    return this.http.get<IFlashcard[]>('assets/json/DB.json');
  }
}
