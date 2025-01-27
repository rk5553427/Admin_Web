import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { BusDriverComponent } from '../bus-driver/bus-driver.component';


@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrl: './bus-detail.component.scss'
})
export class BusDetailComponent {

  constructor(
    private matDialog: MatDialog,
  ) { }


  openModal() {
    this.matDialog.open(BusDriverComponent, {
      width: '6000px',
      maxHeight: '90vh',
      data: "John",
      autoFocus: false
    });
  }
}
