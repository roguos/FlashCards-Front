import { Component, Input } from '@angular/core';
import { FlashcardsService } from 'src/app/services/flashcards.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  constructor(public FCService: FlashcardsService) {}
  @Input() show: Number = 1;

  setShow(i: Number) {
    this.show = i;
  }
}
