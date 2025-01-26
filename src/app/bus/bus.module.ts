import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BusDetailComponent } from './bus-detail/bus-detail.component';

const routes: Routes = [
  { path: 'bus', component: BusDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Use RouterModule.forChild
  ],
  exports: [RouterModule],
})
export class BusModule {}
