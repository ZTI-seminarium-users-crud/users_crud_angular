import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Filters, placeholderStudentUnsavedToDatabase, sampleFilters } from 'src/app/consts';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from 'src/app/dialogs/add-student-dialog/add-student-dialog.component';
import { Observable, of } from 'rxjs';
import { ApiEndpoint, ApiMethod, HttpService } from 'src/app/util/http/http.service';
import { SidebarService } from './sidebar.service';


import {combineLatest } from 'rxjs';

 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  specializations: Observable<string[]> = of([]);
  degrees: Observable<number[]> =  of([]);
  semesters: Observable<number[]> =  of([]);


  @Output() filtersChange = new EventEmitter<Filters>();

  constructor(public dialog: MatDialog, private service: SidebarService) {}
  
  ngOnInit(){
    // TODO replace when the backend endpoints are ready
    this.specializations = this.service.querySpecializations();  
    this.degrees = this.service.queryDegrees();
    this.semesters = this.service.querySemesters();
  }


  openAddStudentDialog(){
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      data: {
          student: placeholderStudentUnsavedToDatabase,
          specializations: this.specializations,
          degrees: this.degrees
        },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      debugger;
    });
  }





}

