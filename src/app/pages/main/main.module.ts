import {NgModule} from '@angular/core';

import {MainComponent} from './main.component';
import {CommonModule} from "@angular/common";
import {RecordDialogModule} from "../../shared/components/record-dialog/record-dialog.module";

@NgModule({
  imports: [
    CommonModule,
    RecordDialogModule
  ],
  exports: [
    MainComponent
  ],
  declarations: [MainComponent],
  providers: [],
})
export class MainModule {
}
