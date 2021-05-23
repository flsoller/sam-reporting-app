import { Component, OnInit } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  menuWidth: string[] = [];
  open = true;

  constructor(private sidenavService: SidenavService) {}

  ngOnInit(): void {
    this.menuWidth = this.sidenavService.initialSidenav();

    this.sidenavService.toggleRequest.subscribe((width: string[]) => {
      this.menuWidth = width;
      // Delay open prop to allow transition-width finish before showing conditional text
      setTimeout(
        () => {
          this.open = !this.open;
        },
        this.open ? 0 : 300
      );
    });
  }
}
