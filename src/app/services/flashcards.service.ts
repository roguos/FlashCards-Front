import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFlashcard } from '../interfaces/flashcard';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class FlashcardsService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'bottom'
    });
  }
  get flashcards() {
    return this.http.get<IFlashcard[]>('assets/json/DB.json');
  }
}
