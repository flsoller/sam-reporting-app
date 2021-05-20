import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

// Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ToolbarComponent, SidenavComponent],
  exports: [ToolbarComponent, SidenavComponent],
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
})
export class SharedModule {}
