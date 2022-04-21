import { Component, OnInit } from '@angular/core';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

import * as moment from 'moment';

import { debounceTime, Subject } from 'rxjs';

import { RecordDto } from 'src/app/rest/records/record.dto';
import { RecordsService } from 'src/app/rest/records/records.service';
import { MY_DATE_FORMAT } from '../../shared/constants/constants';
import { TotalByCategoryService } from '../../rest/total-by-category/total-by-category.service';
import { TotalByCategoryDto } from 'src/app/rest/total-by-category/total-by-category.dto';
import { TotalPriceByClientDto } from '../../rest/total-price-by-client/total-price-by-client.dto';
import { TotalPriceByClientService } from '../../rest/total-price-by-client/total-price-by-client.service';
import { ClientVisitsService } from '../../rest/client-visits/client-visits.service';
import { ClientVisitsDto } from '../../rest/client-visits/client-visits.dto';

@Component({
  templateUrl: './dashboard.html',
  styleUrls: [ './dashboard.scss' ],
  providers: [
    RecordsService,
    TotalByCategoryService,
    TotalPriceByClientService,
    ClientVisitsService,
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [ MAT_DATE_LOCALE ] },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ],
})

export class DashboardComponent implements OnInit {
  recordsColumns = [
    'position', 'recordClient', 'recordPhone', 'recordMaster', 'recordCategory', 'recordService',
    'recordSchedule', 'recordDate',
  ];
  records: RecordDto[] = [];
  clientName = '';
  masterName = '';
  recordSearchChanged: Subject<void> = new Subject<void>();
  recordStartDate: any;
  recordEndDate: any;

  totalByCategoryColumns = [
    'position', 'recordCategory', 'totalRecordPrice',
  ];
  totalByCategory: TotalByCategoryDto[] = [];
  totalByCategoryStartDate: any;
  totalByCategoryEndDate: any;

  totalPriceByClientColumns = [
    'position', 'clientName', 'price',
  ];
  totalPriceByClient: TotalPriceByClientDto[] = [];

  clientVisitsColumns = [
    'position', 'clientName', 'clientVisits',
  ];
  clientVisits: ClientVisitsDto[] = [];

  constructor(
    private recordsService: RecordsService,
    private totalByCategoryService: TotalByCategoryService,
    private totalPriceByClientService: TotalPriceByClientService,
    private clientVisitsService: ClientVisitsService,
  ) {}

  ngOnInit() {
    this.initRecords();
    this.initTotalByCategory();
    this.initTotalPriceByClient();
    this.initClientVisits();

    this.recordSearchChanged.pipe(debounceTime(500))
      .subscribe(() => this.initRecords());
  }

  initRecords(): void {
    const startDate = this.recordStartDate ? moment(this.recordStartDate).format('YYYY-MM-DD') : '';
    const endDate = this.recordEndDate ? moment(this.recordEndDate).format('YYYY-MM-DD') : '';

    this.recordsService.getRecords(this.clientName, this.masterName, startDate, endDate)
      .subscribe(records => this.records = records);
  }

  initTotalByCategory(): void {
    const startDate = this.totalByCategoryStartDate ? moment(this.totalByCategoryStartDate).format('YYYY-MM-DD') : '';
    const endDate = this.totalByCategoryEndDate ? moment(this.totalByCategoryEndDate).format('YYYY-MM-DD') : '';

    this.totalByCategoryService.getTotalByCategory(startDate, endDate)
      .subscribe(totalByCategory => this.totalByCategory = totalByCategory);
  }

  initTotalPriceByClient(): void {
    this.totalPriceByClientService.getTotalPriceByClient()
      .subscribe(totalPriceByClient => this.totalPriceByClient = totalPriceByClient);
  }

  initClientVisits(): void {
    this.clientVisitsService.getClientVisits()
      .subscribe(clientVisits => this.clientVisits = clientVisits);
  }

  onRecordSearchChanged(): void {
    this.recordSearchChanged.next();
  }

}
