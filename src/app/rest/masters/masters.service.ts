import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {MasterDto} from "./master.dto";

@Injectable()
export class MastersService {

  constructor(private http: HttpClient) {
  }

  getMasters(): Observable<MasterDto[]> {
    return this.http.get<MasterDto[]>('http://localhost:8080/api/masters').
      pipe(
        map(masters => masters.map(master => new MasterDto(master))),
    );

  }
}
