import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map, Observable } from "rxjs";

import { RecordDto } from "./record.dto";

@Injectable()
export class RecordsService {

  constructor(private http: HttpClient) {
  }

  getRecords(clientName: string, masterName: string, startDate: string, endDate: string): Observable<RecordDto[]> {
    let params = { clientName, masterName, startDate, endDate };

    return this.http.get<RecordDto[]>('/api/records', { params }).pipe(
      map(records => records.map(record => new RecordDto(record))),
    );

  }

  createRecord(record: RecordDto): Observable<RecordDto> {
    return this.http.post<RecordDto>('/api/records', record);
  }
}
