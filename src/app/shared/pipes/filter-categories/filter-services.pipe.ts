import {Pipe, PipeTransform} from '@angular/core';
import {CategoryDto} from "../../../rest/categories/category.dto";

@Pipe({
  name: 'filterCategories'
})

export class FilterCategoriesPipe implements PipeTransform {
  transform(categories: CategoryDto[], masterCategoryId?: string): any {
    if(!categories.length) return null;
    if(!masterCategoryId) return categories;

    return categories.filter(category => category.categoryId === masterCategoryId);
  }
}
