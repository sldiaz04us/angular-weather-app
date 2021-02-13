import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isOpen = false;

  close(): void {
    if (this.isOpen) { this.isOpen = !this.isOpen; }
  }

}
