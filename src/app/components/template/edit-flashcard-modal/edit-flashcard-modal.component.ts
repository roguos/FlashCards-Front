import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FlashcardsService } from 'src/app/services/flashcards.service';

@Component({
  selector: 'app-edit-flashcard-modal',
  templateUrl: './edit-flashcard-modal.component.html',
  styleUrls: ['./edit-flashcard-modal.component.css']
})
export class EditFlashcardModalComponent {
  constructor(
    public dialogRef: MatDialogRef<EditFlashcardModalComponent>,
    private flascardsService: FlashcardsService
  ) {}
  handleClosed(): void {
    this.dialogRef.close();
  }
  message(msg: string) {
    this.flascardsService.showMessage(msg);
  }
}
