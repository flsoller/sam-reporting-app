import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidenavService {
  toggleRequest = new Subject<string[]>();

  private menuWidth: string[] = ['w-56', 'p-4'];
  private open: boolean = true;

  initialSidenav() {
    return this.menuWidth;
  }

  toggleMenu() {
    this.open = !this.open;
    this.open === false
      ? (this.menuWidth = ['w-16', 'py-4'])
      : (this.menuWidth = ['w-56', 'p-4']);
    this.toggleRequest.next(this.menuWidth);
  }
}
