import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import {DashboardComponent} from './dashboard.component';
import {MatTableModule} from "@angular/material/table";
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  imports: [
    DashboardRoutingModule,
    CommonModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
  ],
  exports: [],
  declarations: [DashboardComponent],
  providers: [],
})
export class DashboardModule {
}
