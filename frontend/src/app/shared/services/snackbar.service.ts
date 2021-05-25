import { Injectable } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private duration: number = 5000;
  private verticalPosition: MatSnackBarVerticalPosition = 'top';
  private horizontalPos: MatSnackBarHorizontalPosition = 'right';
  private action: string = 'OK';

  constructor(private matSnackBar: MatSnackBar) {}

  showSnackBar(message: string, style?: string) {
    this.matSnackBar.open(message, this.action, {
      duration: this.duration,
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPos,
      panelClass: style,
    });
  }
}
