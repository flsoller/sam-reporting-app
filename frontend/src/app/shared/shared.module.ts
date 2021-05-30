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
import { TableCellComponent } from './components/table-cell/table-cell.component';

@NgModule({
  declarations: [
    ToolbarComponent,
    SidenavComponent,
    TableHeaderComponent,
    TableCellComponent,
  ],
  exports: [
    ToolbarComponent,
    SidenavComponent,
    TableHeaderComponent,
    TableCellComponent,
  ],
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
})
export class SharedModule {}
