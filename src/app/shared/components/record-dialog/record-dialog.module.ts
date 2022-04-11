import {NgModule} from '@angular/core';

import {RecordDialogComponent} from "./record-dialog.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatCommonModule} from "@angular/material/core";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  imports: [MatDialogModule, MatButtonModule, MatCommonModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  exports: [RecordDialogComponent],
  declarations: [RecordDialogComponent],
})
export class RecordDialogModule {}
