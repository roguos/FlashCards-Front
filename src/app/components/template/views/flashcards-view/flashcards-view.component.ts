import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateFlashcardModalComponent } from '../../create-flashcard-modal/create-flashcard-modal.component';

@Component({
  selector: 'app-flashcards-view',
  templateUrl: './flashcards-view.component.html',
  styleUrls: ['./flashcards-view.component.css'],
})
export class FlashcardsViewComponent {
  constructor(public dialog: MatDialog) {}
  animal: string = '';
  name: string = '';
  openDialog(): void {
    const dialogRef = this.dialog.open(CreateFlashcardModalComponent, {
      width: '500px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
}
