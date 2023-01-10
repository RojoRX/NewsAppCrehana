import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pops-up',
  templateUrl: './pops-up.component.html',
  styleUrls: ['./pops-up.component.css']
})
export class PopsUpComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PopsUpComponent>
  ) { }

  closePopUp() {
    this.dialogRef.close();
  }
}