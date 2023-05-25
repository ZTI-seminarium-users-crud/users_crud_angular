import { Injectable } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { StudentUnsavedToDatabase, sampleFilters } from 'src/app/consts';
import { ApiEndpoint, ApiMethod, HttpService } from 'src/app/util/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor(private http: HttpService) { }

  querySpecializations = () => (this.http.requestCall(ApiMethod.GET, ApiEndpoint.FILTERS_SPECIALIZATIONS) as Observable<string[]>)

  queryDegrees = () => (this.http.requestCall(ApiMethod.GET, ApiEndpoint.FILTERS_DEGREES) as Observable<string[]>).pipe(
    map(degrees => degrees.map(degreeAsString => parseInt(degreeAsString)))
  );

  querySemesters = () => (this.http.requestCall(ApiMethod.GET, ApiEndpoint.FILTERS_SEMESTERS) as Observable<string[]>).pipe(
    map(semesters => semesters.map(semester => parseInt(semester)))
  );


  addStudent(newStudent: StudentUnsavedToDatabase){
    // console.log(`adding new student: ${JSON.stringify(newStudent, null, 2)}`)
    // TODO: replace when the backend endpoints are ready.
    this.http.requestCall(ApiMethod.POST, ApiEndpoint.STUDENT_ADD, newStudent);
    console.log('addstudent');
  }

}
