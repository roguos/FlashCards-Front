import { FlashcardsService } from 'src/app/services/flashcards.service';
import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-flashcard-modal',
  templateUrl: './create-flashcard-modal.component.html',
  styleUrls: ['./create-flashcard-modal.component.css'],
})
export class CreateFlashcardModalComponent {
  constructor(
    public dialogRef: MatDialogRef<CreateFlashcardModalComponent>,
    private flascardsService: FlashcardsService
  ) {}
  handleClosed(): void {
    this.dialogRef.close();
  }
  message(msg: string) {
    this.flascardsService.showMessage(msg, 'success');
  }
}
