import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  templateUrl: './record-dialog.html'
})

export class RecordDialogComponent implements OnInit {
  recordForm!: FormGroup;

  constructor(
    private fB:FormBuilder,
  ) {
  }

  ngOnInit() {
    this.recordForm = this.fB.group({
      phone: [''],
      clientName: [''],
      email: [''],
      recordMaster: [''],
      recordCategory: [''],
      recordService: [''],
      recordData: [''],
      recordSchedule: [''],
    });
  }
}
