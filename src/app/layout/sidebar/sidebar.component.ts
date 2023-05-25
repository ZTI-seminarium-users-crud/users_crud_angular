import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Filters, StudentUnsavedToDatabase, placeholderStudentUnsavedToDatabase, sampleFilters } from 'src/app/consts';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from 'src/app/dialogs/add-student-dialog/add-student-dialog.component';
import { Observable, map, of } from 'rxjs';
import { ApiEndpoint, ApiMethod, HttpService } from 'src/app/util/http/http.service';
import { SidebarService } from './sidebar.service';





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


  handleFiltersChange(newFilters: Filters){
    console.log('SidebarComponent handleFiltersChange')
    this.filtersChange.emit(newFilters);
  }


  openAddStudentDialog(){
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      data: {
          student: placeholderStudentUnsavedToDatabase,
          specializations: this.specializations,
          degrees: this.degrees,
          semesters: this.semesters
        },
    });

    dialogRef.afterClosed().subscribe( (result: StudentUnsavedToDatabase) => {
      // debugger;
      if(result === undefined) return;
      // if(result === '') return;
      this.service.addStudent(result).subscribe(res => {
        console.log(res);
        // debugger;
      })
    });
  }


}

