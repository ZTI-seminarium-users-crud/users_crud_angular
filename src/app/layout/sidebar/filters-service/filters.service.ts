import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiEndpoint, HttpService } from 'src/app/util/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(private httpService: HttpService) { }

  querySpecializations = () => this.query(ApiEndpoint.FILTERS_SPECIALIZATIONS);

  queryDegrees = () => this.query(ApiEndpoint.FILTERS_DEGREES);

  querySemesters = () => this.query(ApiEndpoint.FILTERS_SEMESTERS);

  query = (endpoint: ApiEndpoint) => this.httpService.requestCall('GET', endpoint) as Observable<string[]>;


}
