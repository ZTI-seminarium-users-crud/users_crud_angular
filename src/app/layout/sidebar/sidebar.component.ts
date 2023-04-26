import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Filters, placeholderStudentUnsavedToDatabase, sampleFilters } from 'src/app/consts';
import { MatDialog } from '@angular/material/dialog';
import { AddStudentDialogComponent } from 'src/app/dialogs/add-student-dialog/add-student-dialog.component';
import { Observable, of } from 'rxjs';
import { ApiEndpoint, ApiMethod, HttpService } from 'src/app/util/http/http.service';




 
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit{

  specializations: Observable<string[]> = of(sampleFilters.specializations);
  degrees: Observable<number[]> = of(sampleFilters.degrees);
  semesters: Observable<number[]> = of(sampleFilters.semesters);


  @Output() filtersChange = new EventEmitter<Filters>();

  constructor(public dialog: MatDialog, private http: HttpService) {}
  
  ngOnInit(){
    // this.specializations = this.querySpecializations();  
    // this.degrees = this.queryDegrees();
    // this.semesters = this.querySemesters();
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
          degrees: this.degrees
        },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      debugger;
    });
  }



  querySpecializations = () => (this.http.requestCall(ApiMethod.GET, ApiEndpoint.FILTERS_SPECIALIZATIONS) as Observable<string[]>)

  queryDegrees = () => (this.http.requestCall(ApiMethod.GET, ApiEndpoint.FILTERS_DEGREES) as Observable<number[]>)

  querySemesters = () => (this.http.requestCall(ApiMethod.GET, ApiEndpoint.FILTERS_SEMESTERS) as Observable<number[]>)

}

