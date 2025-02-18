import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bus-driver',
  templateUrl: './bus-driver.component.html',
  styleUrl: './bus-driver.component.scss'
})
export class BusDriverComponent {

  constructor(
    public dialogRef: MatDialogRef<BusDriverComponent>,
    @Inject(MAT_DIALOG_DATA) 
    public data: any
  ) {}

  close(){
    this.dialogRef.close();
  }
  
}
