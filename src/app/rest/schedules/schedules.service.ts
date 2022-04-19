import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ScheduleDto} from "./schedule.dto";

@Injectable()
export class SchedulesService {

  constructor(private http: HttpClient) {
  }

  getSchedules(): Observable<ScheduleDto[]> {
    return this.http.get<ScheduleDto[]>('/api/schedules').
      pipe(
        map(schedules => schedules.map(schedule => new ScheduleDto(schedule))),
    );

  }
}
