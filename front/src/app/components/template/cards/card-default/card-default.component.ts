import { Component, Input } from '@angular/core';
import { IFlashcard } from 'src/app/interfaces/flashcard';

@Component({
  selector: 'app-card-default',
  templateUrl: './card-default.component.html',
  styleUrls: ['./card-default.component.css'],
})
export class CardDefaultComponent {
  @Input() cardData: IFlashcard = {
    id: 0,
    title: '',
    tip: '',
    text: '',
    topic: ''
  }
}
