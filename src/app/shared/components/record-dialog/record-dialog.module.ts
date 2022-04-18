import {NgModule} from '@angular/core';

import {RecordDialogComponent} from "./record-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatCommonModule, MatNativeDateModule} from "@angular/material/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {CommonModule} from "@angular/common";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {PipesModule} from "../../pipes/pipes.module";

@NgModule({
  imports:
    [
      MatDialogModule,
      MatButtonModule,
      MatCommonModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      CommonModule,
      MatDatepickerModule,
      MatNativeDateModule,
      PipesModule,
    ],
  exports: [RecordDialogComponent],
  declarations: [RecordDialogComponent],
})
export class RecordDialogModule {
}
