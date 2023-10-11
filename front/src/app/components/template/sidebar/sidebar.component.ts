import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Output() show = new EventEmitter<Number>();

  on(int: Number) {
    this.show.emit(int);
  }
  boo: boolean = true;

  onMouseEnter() {
    this.boo = false;
  }
  onMouseOut() {
    this.boo = true;
  }
}
