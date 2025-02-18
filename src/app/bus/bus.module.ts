import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BusDetailComponent } from './bus-detail/bus-detail.component';
import { BusDriverComponent } from './bus-driver/bus-driver.component';

const routes: Routes = [
  { path: 'bus', component: BusDetailComponent },
];

@NgModule({
  declarations: [
    BusDetailComponent,
    BusDriverComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Use RouterModule.forChild
  ],
  exports: [RouterModule],
})
export class BusModule {}
