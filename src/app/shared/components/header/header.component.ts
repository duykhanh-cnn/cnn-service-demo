// header.component.ts
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // Add a ViewChild decorator and assign it to a property named sidenav
  @ViewChild('sidenav')
  sidenav!: MatSidenav;

  constructor() { }

  // Use the sidenav property to toggle the sidenav
  toggleSidenav() {
    this.sidenav.toggle();
  }
}