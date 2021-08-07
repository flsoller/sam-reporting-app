import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { SidenavService } from '../services/sidenav.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  sub: Subscription = new Subscription();
  nameInitial: string | null = null;

  constructor(
    private sidenavService: SidenavService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.sub = this.auth.user.subscribe((user) => {
      this.nameInitial = user?.name.split('')[0].toLocaleUpperCase() || null;
    });
  }

  onToggleRequest() {
    this.sidenavService.toggleMenu();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
