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
      this.open = !this.open;
    });
  }
}
