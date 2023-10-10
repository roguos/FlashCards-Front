import { Component } from '@angular/core';
import { FlashcardsService } from 'src/app/services/flashcards.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  constructor(public FCService: FlashcardsService) {}
}
