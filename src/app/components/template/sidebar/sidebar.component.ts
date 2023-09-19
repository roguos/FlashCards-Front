import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarCollapse(){
    document.querySelector('.sidebar')?.classList.toggle('slim');
    document.querySelector('app-main')?.classList.toggle('expanded');
  }
}
