import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map, Observable } from "rxjs";

import { TotalPriceByClientDto } from "./total-price-by-client.dto";

@Injectable()
export class TotalPriceByClientService {

  constructor(private http: HttpClient) {}

  getTotalPriceByClient(): Observable<TotalPriceByClientDto[]> {
    return this.http.get<TotalPriceByClientDto[]>('/api/total-price-by-client').pipe(
      map(totalPriceByClient => totalPriceByClient.map(totalItem => new TotalPriceByClientDto(totalItem))),
    );

  }
}
