import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MasterDto} from "../../../rest/masters/master.dto";
import {CategoryDto} from 'src/app/rest/categories/category.dto';
import {ServiceDto} from "../../../rest/services/service.dto";
import {ScheduleDto} from 'src/app/rest/schedules/schedule.dto';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from "@angular/material/core";
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import * as moment from 'moment';

export interface DialogData {
  masters: MasterDto[];
  categories: CategoryDto[];
  services: ServiceDto[];
  schedules: ScheduleDto[];
}

const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY', // this is how your date will be parsed from Input
  },
  display: {
    dateInput: 'DD/MM/YYYY', // this is how your date will get displayed on the Input
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

@Component({
  templateUrl: './record-dialog.html',
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT}
  ],
})

export class RecordDialogComponent implements OnInit {
  recordForm!: FormGroup;
  minDate: any = moment();
  masterCategoryId!: string;

  masters: MasterDto[] = [];
  categories: CategoryDto[] = [];
  services: ServiceDto[] = [];
  schedules: ScheduleDto[] = [];

  constructor(
    private fB: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private dialogData: DialogData,
  ) {
  };

  ngOnInit() {
    console.log(this.dialogData);
    Object.assign(this, this.dialogData);
    this.initForm();
  }

  private initForm() {
    this.recordForm = this.fB.group({
      phone: ['+380', [Validators.required]],
      clientName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      recordMaster: ['', [Validators.required]],
      recordCategory: ['', [Validators.required]],
      recordService: ['', [Validators.required]],
      recordDate: ['', [Validators.required]],
      recordSchedule: ['', [Validators.required]],
    });

    this.recordForm.get('recordMaster')?.valueChanges
      .subscribe(masterId => this.masterCategoryId = this.masters
        .find(master => master.masterId === masterId)?.masterCategory || '');
  }
}
