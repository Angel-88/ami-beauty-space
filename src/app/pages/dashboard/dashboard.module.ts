import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule,
    MatTableModule,
  ],
  exports: [],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {
}
