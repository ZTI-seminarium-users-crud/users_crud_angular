import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { sampleFilters } from 'src/app/consts';
import { HttpService, ApiMethod, ApiEndpoint } from 'src/app/util/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpService) { }

  // TODO replace when the backend endpoints are ready
  // querySpecializations = () => (this.http.requestCall(ApiMethod.GET, ApiEndpoint.FILTERS_SPECIALIZATIONS) as Observable<string[]>)
  querySpecializations = () => of(sampleFilters.specializations);

  // queryDegrees = () => (this.http.requestCall(ApiMethod.GET, ApiEndpoint.FILTERS_DEGREES) as Observable<number[]>)
  queryDegrees = () => of(sampleFilters.degrees);

  // querySemesters = () => (this.http.requestCall(ApiMethod.GET, ApiEndpoint.FILTERS_SEMESTERS) as Observable<number[]>)
  querySemesters = () => of(sampleFilters.semesters);
}
