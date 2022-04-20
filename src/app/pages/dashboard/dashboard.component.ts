import {Component, OnInit} from '@angular/core';
import {RecordDto} from 'src/app/rest/records/record.dto';
import {RecordsService} from 'src/app/rest/records/records.service';

@Component({
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  providers: [RecordsService],
})

export class DashboardComponent implements OnInit {
  records: RecordDto[] = [];

  constructor(private recordsService: RecordsService) {
  }

  ngOnInit() {
    this.initRecords();
  }

  private initRecords() {
    this.recordsService.getRecords().subscribe(records => this.records = records);
  }
}
