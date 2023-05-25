import { Injectable } from '@angular/core';
import {ApiEndpoint, ApiMethod, HttpService} from "../../util/http/http.service";
import {Observable} from "rxjs";
import {Student} from "../../consts";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpService) { }

  querySpecializations = () => (this.http.requestCall(ApiMethod.GET, ApiEndpoint.FILTERS_SPECIALIZATIONS) as Observable<string[]>)

  queryDegrees = () => (this.http.requestCall(ApiMethod.GET, ApiEndpoint.FILTERS_DEGREES) as Observable<number[]>)

  querySemesters = () => (this.http.requestCall(ApiMethod.GET, ApiEndpoint.FILTERS_SEMESTERS) as Observable<number[]>)

  updateStudent(selectedStudent: Student){
    console.log('tableService - updateStudent','student:'+selectedStudent.id)
    // TODO: replace when the backend endpoints are ready.
    return this.http.requestCall(ApiMethod.PUT, 'student:'+selectedStudent.id, selectedStudent);
  }

  deleteStudent(selectedStudent: Student){
    console.log('tableService - deleteStudent','student:'+selectedStudent.id)
    // TODO: replace when the backend endpoints are ready.
    return this.http.requestCall(ApiMethod.DELETE, 'student:'+selectedStudent.id);
  }
}
