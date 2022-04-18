import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {RecordDto} from "./record.dto";

@Injectable()
export class RecordsService {

  constructor(private http: HttpClient) {
  }

  getRecords(): Observable<RecordDto[]> {
    return this.http.get<RecordDto[]>('http://localhost:8080/api/records').
      pipe(
        map(records => records.map(record => new RecordDto(record))),
    );

  }
}
