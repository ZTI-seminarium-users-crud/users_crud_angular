import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  columnNamesList,
  COLUMN_NAMES,
  Student,
  Filters,
  defaultFilters,
  sampleFilters,
  PageSize,
  defaultPageSize,
  defaultPageNumber
} from './consts';
import { ApiEndpoint, HttpService } from './util/http/http.service';

import { ApiMethod } from './util/http/http.service';

import queryString from 'query-string';
import { Observable, Subscription, of } from 'rxjs';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'users_crud';

  selectedColumnNames = columnNamesList;
  selectedFilters: Filters = sampleFilters;
  selectedPageSize: PageSize = defaultPageSize;
  selectedPageNumber: number = defaultPageNumber;

  students: Observable<Student[]> = of([]);
  // studentsSubscription?: Subscription;

  constructor(private appService: AppService){

  }
  ngOnInit(): void {
    this.queryTablePage();
  }
  ngOnDestroy(): void {
    // this.studentsSubscription?.unsubscribe();
  }

  handleSelectedColumnsChange(newSelectedColumns: COLUMN_NAMES[]){
    this.selectedColumnNames = newSelectedColumns
    this.queryTablePage();
  }

  handleFiltersChange(newFilters: Filters){
    this.selectedFilters = newFilters;
    this.queryTablePage();
  }

  handlePaginatorChange(newPageValues: number[]){
    this.selectedPageNumber = newPageValues[0];
    this.selectedPageSize = newPageValues[1] as PageSize;
    this.queryTablePage();
  }

  handleTableChange(){
    this.queryTablePage();
  }
  handleStudentAdded(){
    this.queryTablePage();
  }

  selectPageSize(ps: number){
    if( ps == defaultPageSize )
      this.selectedPageSize = ps;
  }

  queryTablePage(){
    // TODO: connect to backend
    // console.log(getNewEndpointFromFiltersAndColumns(this.selectedColumnNames, this.selectedFilters, this.selectedPageSize, this.selectedPageNumber))

    // this.studentsSubscription = (this.http.requestCall(ApiMethod.GET, getNewEndpointFromFiltersAndColumns(columns, filters)) as Observable<Student[]>).subscribe(result => {
    //   this.students = result;
    // });

    // or:

    this.students = this.appService.queryStudents(this.selectedColumnNames, this.selectedFilters, this.selectedPageSize, this.selectedPageNumber);
    // this.students = this.students.

  }

  getSelectedColumnsWithId(){
    let selectedColumnsWithId = ["id" as keyof COLUMN_NAMES, ...this.selectedColumnNames].sort( (a: any, b: any) => {
      return columnNamesList.indexOf(a) > columnNamesList.indexOf(b) ? 1 : -1;
    })
    return [...selectedColumnsWithId, 'actions'] as COLUMN_NAMES[];
  }

}


