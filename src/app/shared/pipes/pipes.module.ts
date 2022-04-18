import {NgModule} from '@angular/core';
import {FilterServicesPipe} from "./filter-services/filter-services.pipe";
import {FilterCategoriesPipe} from "./filter-categories/filter-services.pipe";

@NgModule({
  exports: [
    FilterServicesPipe,
    FilterCategoriesPipe,
  ],
  declarations: [
    FilterServicesPipe,
    FilterCategoriesPipe,
  ],
})
export class PipesModule {
}
