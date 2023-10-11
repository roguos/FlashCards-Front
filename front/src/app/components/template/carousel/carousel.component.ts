import { Component } from '@angular/core';
import { FlashcardsService } from 'src/app/services/flashcards.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent {
  constructor(public FCService: FlashcardsService) {}
}
