import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  nameInitial = '';

  constructor(
    private sidenavService: SidenavService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.nameInitial =
      this.auth.user.value?.name.split('')[0].toLocaleUpperCase() || '';
  }

  onToggleRequest() {
    this.sidenavService.toggleMenu();
  }
}
