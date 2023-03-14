import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiEndpoint, HttpService } from 'src/app/util/http/http.service';
import { CheckboxFilter } from '../checkbox-filter/checkbox-filter.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private httpService: HttpService) { }

  querySpecializations = () => this.query(ApiEndpoint.FILTERS_SPECIALIZATIONS);

  queryDegrees = () => this.query(ApiEndpoint.FILTERS_DEGREES);

  querySemesters = () => this.query(ApiEndpoint.FILTERS_SEMESTERS);

  query = (endpoint: ApiEndpoint) => (this.httpService.requestCall('GET', endpoint) as
    Observable<string[]>).pipe(map(names => names.map(convertStringToCheckboxFilter)));


}

function convertStringToCheckboxFilter(name: string): CheckboxFilter {
  return {
    name: name,
    isChecked: false
  }
}