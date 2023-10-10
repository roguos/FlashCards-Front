import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  boo: boolean = true;

  onMouseEnter() {
    this.boo = false;
  }
  onMouseOut() {
    this.boo = true;
  }
}
