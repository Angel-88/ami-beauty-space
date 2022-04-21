import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map, Observable } from "rxjs";

import { ClientVisitsDto } from "./client-visits.dto";

@Injectable()
export class ClientVisitsService {

  constructor(private http: HttpClient) {}

  getClientVisits(): Observable<ClientVisitsDto[]> {
    return this.http.get<ClientVisitsDto[]>('/api/client-visits').pipe(
      map(clientVisits => clientVisits.map(clientVisitsItem => new ClientVisitsDto(clientVisitsItem))),
    );

  }
}
