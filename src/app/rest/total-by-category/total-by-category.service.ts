import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { map, Observable } from "rxjs";

import { TotalByCategoryDto } from "./total-by-category.dto";

@Injectable()
export class TotalByCategoryService {

  constructor(private http: HttpClient) {}

  getTotalByCategory(startDate: string, endDate: string): Observable<TotalByCategoryDto[]> {
    return this.http.get<TotalByCategoryDto[]>('/api/total-by-category', { params: { startDate, endDate } }).pipe(
      map(totalByCategory => totalByCategory.map(totalItem => new TotalByCategoryDto(totalItem))),
    );

  }
}
