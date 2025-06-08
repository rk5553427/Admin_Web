import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-action-cell-renderer',
  template: `
    <button (click)="edit()" class="btn btn-sm btn-primary">Edit</button>
    <button (click)="delete()" class="btn btn-sm btn-danger">Delete</button>
  `
})
export class ActionCellRendererComponent implements ICellRendererAngularComp {
  params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  edit() {
    this.params.context.componentParent.onEditRow(this.params.data);
  }

  delete() {
    this.params.context.componentParent.onDeleteRow(this.params.data);
  }
}
