import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BusDetailComponent } from './bus-detail/bus-detail.component';
import { BusDriverComponent } from './bus-driver/bus-driver.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskConfig, NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgGridModule } from 'ag-grid-angular';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

const routes: Routes = [
  { path: 'bus', component: BusDetailComponent },
];

// const maskConfig: Partial<NgxMaskConfig> = {
//   validation: false,
// };

@NgModule({
  declarations: [
    BusDetailComponent,
    BusDriverComponent,
    
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    // NgxMaskDirective, 
    //   NgxMaskPipe, NgbModule,,
    AgGridModule,
    RouterModule.forChild(routes), // Use RouterModule.forChild
  ],
  // providers: [provideNgxMask()],
  exports: [RouterModule],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BusModule {}
