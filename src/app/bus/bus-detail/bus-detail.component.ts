import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ColDef } from 'ag-grid-community';
import { BusesService } from './../buses.service';
import { BusDriverComponent } from '../bus-driver/bus-driver.component';
import { GridColumnDefsService } from '../grid-column-defs.service';
import { ActionCellRendererComponent } from '../../action-cell-renderer/action-cell-renderer.component';

@Component({
  selector: 'app-bus-detail',
  templateUrl: './bus-detail.component.html',
  styleUrls: ['./bus-detail.component.scss'],
})
export class BusDetailComponent implements OnInit {
  selectedTab: string = 'Bus Driver';
  columnDefs: any;
  frameworkComponents: any;
  gridOptions: any;
  rowData: any[] = [];
  defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
  };

  constructor(
    private matDialog: MatDialog,
    private busesService: BusesService,
    private columnDef: GridColumnDefsService
  ) {}

  ngOnInit(): void {
  this.getGrid();
  }



  tabClick(tab: string) {
    this.selectedTab = tab;
  }

 getAllDriver(): void {
    this.busesService.GetAllDriver().subscribe({
      next: (res: any) => {
        this.rowData = res.data;
      },
      error: (err) => {
        console.error('Error loading drivers:', err);
      }
    });
  }

  getGrid(): void {
    this.columnDefs = this.columnDef.driverDetialsColumnDefs;
    this.columnDefs.push({
      headerName: 'Actions',
      cellRenderer: ActionCellRendererComponent,
     cellRendererParams: {
      action: this.openPopUp.bind(this),
      delete: this.openPopUp.bind(this) 
    },
      width: 150
    });
    this.getAllDriver();
  }

  openPopUp(data?: any) {
    const dialogRef = this.matDialog.open(BusDriverComponent, {
      width: '600px',
      maxHeight: '90vh',
      data: data,
      autoFocus: false,
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}











