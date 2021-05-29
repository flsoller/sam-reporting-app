import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Components
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';

// Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TableHeaderComponent } from './components/table-header/table-header.component';

@NgModule({
  declarations: [ToolbarComponent, SidenavComponent, TableHeaderComponent],
  exports: [ToolbarComponent, SidenavComponent, TableHeaderComponent],
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
})
export class SharedModule {}
