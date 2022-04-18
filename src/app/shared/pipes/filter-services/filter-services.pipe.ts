import {Pipe, PipeTransform} from '@angular/core';
import { ServiceDto } from 'src/app/rest/services/service.dto';

@Pipe({
  name: 'filterServices'
})

export class FilterServicesPipe implements PipeTransform {
  transform(services: ServiceDto[], categoryId?: string): any {
    if(!services.length) return null;
    if(!categoryId) return services;

    return services.filter(service => service.serviceCategory === categoryId);
  }
}
