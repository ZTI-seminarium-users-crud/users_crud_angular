import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiEndpoint, HttpService } from 'src/app/util/http/http.service';
import { CheckboxFilter } from '../checkbox-filter/checkbox-filter.component';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private httpService: HttpService) { }

  querySpecializations = () => this.mockQuery(ApiEndpoint.FILTERS_SPECIALIZATIONS);

  queryDegrees = () => this.mockQuery(ApiEndpoint.FILTERS_DEGREES);

  querySemesters = () => this.mockQuery(ApiEndpoint.FILTERS_SEMESTERS);

  query = (endpoint: ApiEndpoint) => (this.httpService.requestCall('GET', endpoint) as
    Observable<string[]>).pipe(map(names => names.map(convertStringToCheckboxFilter)));

  mockQuery = (endpoint: ApiEndpoint) => of([]);

}

function convertStringToCheckboxFilter(name: string): CheckboxFilter {
  return {
    name: name,
    isChecked: false
  }
}