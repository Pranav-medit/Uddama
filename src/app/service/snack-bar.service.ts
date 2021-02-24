import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {
  duration = 4000;

  constructor(private snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string): any {
    let snackBarRef = this.snackBar.open(message, action, {
      duration: this.duration
    });
    return snackBarRef;
  }
}
