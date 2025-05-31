import { BusesService } from './../buses.service';
import { BusDriverComponent } from '../bus-driver/bus-driver.component';
import { GridColumnDefsService } from '../grid-column-defs.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrl: './bus-detail.component.scss',
})
export class BusDetailComponent implements OnInit {
  selectedTab: string = 'Bus Driver';
  columnDefs = [];
  rowData: any[] = [];

  constructor(
    private matDialog: MatDialog,
    private busesService: BusesService,
    private columnDef: GridColumnDefsService
  ) {}

  ngOnInit(): void {
    this.getAllDriver();
  }

  tabClick(tab: string) {
    this.selectedTab = tab;
  }

  getAllDriver() {
    this.busesService.GetAllDriver().subscribe({
      next: (res: any) => {
        this.rowData = res.data;
      },
    });
  }

  openModal() {
    const dialogRef = this.matDialog.open(BusDriverComponent, {
      width: '600px',
      maxHeight: '90vh',
      data: 'John',
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
