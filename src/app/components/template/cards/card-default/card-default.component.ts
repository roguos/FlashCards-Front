import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ICardResult, IFlashcard } from 'src/app/interfaces/flashcard';
import { DeleteFlashcardModalComponent } from '../../delete-flashcard-modal/delete-flashcard-modal.component';
import { EditFlashcardModalComponent } from '../../edit-flashcard-modal/edit-flashcard-modal.component';

@Component({
  selector: 'app-card-default',
  templateUrl: './card-default.component.html',
  styleUrls: ['./card-default.component.css'],
})
export class CardDefaultComponent {
  constructor(public dialog: MatDialog) {}
  @Input() focus: boolean = false;
  @Input() cardData: IFlashcard = {
    id: 0,
    title: 'Este é um Título',
    tip: 'Esta é uma pergunta ou uma dica para lembrar o conteúdo do cartão',
    text: 'Este é o Texto',
    topic: 'Este é o Tópico/Matéria',
    image: '',
  };
  @Output() onPermissionChange = new EventEmitter<boolean>();
  @Output() onResponse = new EventEmitter<ICardResult>();
  active: boolean = false;
  permission: boolean = true;
  handleFlapCards() {
    if (this.focus && this.permission) {
      if (!this.active) {
        this.permission = false;
        this.onPermissionChange.emit(this.permission);
      }
      this.active = !this.active;
    }
  }
  handleResult(n: number) {
    this.onResponse.emit({ card: this.cardData, result: n });
    this.permission = true;
    this.onPermissionChange.emit(this.permission);
  }
  openDialogDelete() {
    this.dialog.open(DeleteFlashcardModalComponent, {
      width: '250px',
    });
  }
  openDialogEdit() {
    this.dialog.open(EditFlashcardModalComponent, {
      width: '500px',
    });
  }
}
