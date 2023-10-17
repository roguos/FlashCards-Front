import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFlashcard } from '../interfaces/flashcard';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root',
})
export class FlashcardsService {
  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}
  showMessage(msg: string, error: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3500,
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: error ? ['msg-error'] : ['msg-success'],
    });
  }
  get flashcards() {
    const data = JSON.parse(this.verificarLocalStorage());
    return data;
  }
  verificarLocalStorage(): string{
    if (!localStorage.getItem('flashcards')) {
      this.http.get<IFlashcard[]>('assets/json/DB.json').subscribe((data) => {
        const cards = JSON.stringify(data);
        localStorage.setItem('flashcards', cards);
      });
    }
    return localStorage.getItem('flashcards')!;
  }
}
