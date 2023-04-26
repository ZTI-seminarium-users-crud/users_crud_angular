import { Component, OnDestroy, OnInit } from '@angular/core';
import { columnNamesList, COLUMN_NAMES, Student, Filters, defaultFilters, sampleFilters, PageSize, defaultPageSize } from './consts';
import { ApiEndpoint, HttpService } from './util/http/http.service';

import { ApiMethod } from './util/http/http.service';

import queryString from 'query-string';
import { Observable, Subscription, of } from 'rxjs';
import { ActivatedRoute, ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy, Router, NavigationEnd} from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'users_crud';

  selectedColumnNames = columnNamesList;
  selectedFilters: Filters = sampleFilters;
  selectedPageSize: PageSize = defaultPageSize;
  selectedPageNumber: number = 1;

  students: Observable<Student[]> = of([]);


  constructor(private http: HttpService, private activatedRoute: ActivatedRoute,
    private router: Router) {
      router.events.forEach((event) => {
        if(event instanceof NavigationEnd) {
          // debugger;
          console.log(location.search);
        }
      });
  }


  ngOnInit() {

  }

  ngOnDestroy(): void {
  }


  handleSelectedColumnsChange(newSelectedColumns: COLUMN_NAMES[]) {
    this.selectedColumnNames = newSelectedColumns
    this.queryTablePage();
  }


  handleFiltersChange(newFilters: Filters) {
    this.selectedFilters = newFilters;
    this.queryTablePage();
  }

  queryTablePage() {
    // TODO: connect to backend
    console.log(getNewEndpointFromFiltersAndColumns(this.selectedColumnNames, this.selectedFilters, this.selectedPageSize, this.selectedPageNumber))

    // this.studentsSubscription = (this.http.requestCall(ApiMethod.GET, getNewEndpointFromFiltersAndColumns(columns, filters)) as Observable<Student[]>).subscribe(result => {
    //   this.students = result;
    // });

    // or:

    // this.students = this.http.requestCall(ApiMethod.GET, getNewEndpointFromFiltersAndColumns(columns, filters)) as Observable<Student[]>

  }



}

function getNewEndpointFromFiltersAndColumns(columns: COLUMN_NAMES[], filters: Filters, pageSize: PageSize, pageNumber: number) {
  const columnsQueryString = queryString.stringify({ columns: columns }, { arrayFormat: 'comma' })
  const specializationsQueryString = queryString.stringify({ specializations: filters.specializations }, { arrayFormat: 'comma' })
  const degreesQueryString = queryString.stringify({ degrees: filters.degrees }, { arrayFormat: 'comma' })
  const semestersQueryString = queryString.stringify({ semesters: filters.semesters }, { arrayFormat: 'comma' })
  const newQueryString = [columnsQueryString, specializationsQueryString, degreesQueryString, semestersQueryString, `pageSize=${pageSize}`, `pageNumber=${pageNumber}`]
    .filter(part => part !== '').join('&');
  debugger;
  return `${ApiEndpoint.STUDENT_LIST}?${newQueryString}`
}
