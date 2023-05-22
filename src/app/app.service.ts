import { Injectable } from '@angular/core';
import queryString from 'query-string';
import { COLUMN_NAMES, Filters, PageSize, Student, sampleStudents } from './consts';
import { HttpService, ApiEndpoint, ApiMethod } from './util/http/http.service';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpService) { }


  queryStudents(columns: COLUMN_NAMES[], filters: Filters, pageSize: PageSize, pageNumber: number){
    const newEndpoint = getNewEndpointFromFiltersAndColumns(columns, filters, pageSize, pageNumber)
    console.log(newEndpoint)
    // return of(sampleStudents);
    return this.http.requestCall(ApiMethod.GET, newEndpoint) as Observable<Student[]>
  }

}

function getNewEndpointFromFiltersAndColumns(columns: COLUMN_NAMES[], filters: Filters, pageSize: PageSize, pageNumber: number){
  const columnsQueryString = queryString.stringify({columns: columns}, {arrayFormat: 'comma'})
  const specializationsQueryString = queryString.stringify({specialization: filters.specializations}, {arrayFormat: 'comma'})
  const degreesQueryString = queryString.stringify({degree: filters.degrees}, {arrayFormat: 'comma'})
  const semestersQueryString = queryString.stringify({semester: filters.semesters}, {arrayFormat: 'comma'})
  const newQueryString = [columnsQueryString, specializationsQueryString, degreesQueryString, semestersQueryString, `pageSize=${pageSize}`, `pageNumber=${pageNumber}`]
    .filter(part => part !== '').join('&');
  // debugger;
  return `${ApiEndpoint.STUDENT_LIST}?${newQueryString}`
}
