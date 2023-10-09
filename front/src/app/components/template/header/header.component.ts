import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() sidenavShow: boolean = true;
  @Output() onSidenavShowChange = new EventEmitter<boolean>();
  sidenavShowToggle(show: boolean) {
    this.sidenavShow = !show;
    this.onSidenavShowChange.emit(this.sidenavShow);
  }
}
