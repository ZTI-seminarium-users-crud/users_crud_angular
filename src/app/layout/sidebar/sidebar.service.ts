import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { StudentUnsavedToDatabase, sampleFilters } from 'src/app/consts';
import { ApiEndpoint, ApiMethod, HttpService } from 'src/app/util/http/http.service';

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


  addStudent(newStudent: StudentUnsavedToDatabase){
    console.log(`adding new student: ${JSON.stringify(newStudent, null, 2)}`)
    // TODO: replace when the backend endpoints are ready.
    // this.http.requestCall(ApiMethod.POST, ApiEndpoint.STUDENT_ADD, newStudent);
  }

}
