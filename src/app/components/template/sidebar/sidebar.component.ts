import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Output() onShowChenge = new EventEmitter<number>();

  on(int: number) {
    this.onShowChenge.emit(int);
  }
  boo: boolean = true;

  onMouseEnter() {
    this.boo = false;
  }
  onMouseOut() {
    this.boo = true;
  }
}
