import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {map, Observable} from "rxjs";

import {CategoryDto} from "./category.dto";

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<CategoryDto[]> {
    return this.http.get<CategoryDto[]>('/api/categories').
      pipe(
        map(categories => categories.map(category => new CategoryDto(category))),
    );

  }
}
