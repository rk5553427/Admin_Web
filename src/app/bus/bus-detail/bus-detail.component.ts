import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { BusDriverComponent } from '../bus-driver/bus-driver.component';


@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrl: './bus-detail.component.scss'
})
export class BusDetailComponent {
  selectedTab: string = 'Bus Driver';
  constructor(
    private matDialog: MatDialog,
  ) { }

  tabClick(tab:string){
    this.selectedTab = tab;
  }

  openModal() {
    const dialogRef = this.matDialog.open(BusDriverComponent, {
      width: '600px',
      maxHeight: '90vh',
      data: "John",
      autoFocus: false
    });
    dialogRef.afterClosed().subscribe(result => {
    })
  }
}
