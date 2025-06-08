import { Injectable } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Injectable({
  providedIn: 'root'
})
export class GridColumnDefsService {

  constructor() { }
  driverDetialsColumnDefs = [
    { field: 'id', headerName: 'ID', sortable: true, filter: true },
    { field: 'driverId', headerName: 'Driver ID', sortable: true, filter: true },
    { field: 'name', headerName: 'Name', sortable: true, filter: true },
    { field: 'fatherName', headerName: 'Father Name', sortable: true, filter: true },
    { field: 'motherName', headerName: 'Mother Name', sortable: true, filter: true },
    { field: 'phoneNumber', headerName: 'Phone Number', sortable: true, filter: true },
    { field: 'email', headerName: 'Email', sortable: true, filter: true },
    { field: 'city', headerName: 'City', sortable: true, filter: true },
    { field: 'district', headerName: 'District', sortable: true, filter: true },
    { field: 'state', headerName: 'State', sortable: true, filter: true },
    { field: 'country', headerName: 'Country', sortable: true, filter: true },
    { field: 'pinCode', headerName: 'Pin Code', sortable: true, filter: true },
    { field: 'type', headerName: 'Type', sortable: true, filter: true },
    { field: 'active', headerName: 'Active', sortable: true, filter: true },
    { field: 'registerDate', headerName: 'Register Date', sortable: true, filter: true },
    { field: 'updatedDate', headerName: 'Updated Date', sortable: true, filter: true },
    {
      headerName: 'Actions',
      cellRenderer: 'actionCellRenderer',
      sortable: false,
      filter: false,
      width: 150,
      suppressMenu: true
    }
  ];

}
