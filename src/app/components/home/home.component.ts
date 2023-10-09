import { Component } from '@angular/core';
import { FlashcardsService } from 'src/app/service/flashcards.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(public cardsService: FlashcardsService) {}

  sidenavShow: boolean = false;
  mostrar() {
    console.log(this.cardsService.data);
  }
}
