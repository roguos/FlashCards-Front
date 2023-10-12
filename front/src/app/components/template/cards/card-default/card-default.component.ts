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
    title: 'Este é um Título',
    tip: 'Esta é uma pergunta ou uma dica para lembrar o conteúdo do cartão',
    text: 'Este é o Texto',
    topic: 'Este é o Tópico/Matéria',
  };
  active: boolean = true;
  focus: boolean = true;
  handleFlapCards() {
    if (this.focus) {
      this.active = !this.active;
    }
  }
}
