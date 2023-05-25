import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {placeholderStudentUnsavedToDatabase, Student} from 'src/app/consts';

import {UpdateStudentDialogComponent} from "../../dialogs/update-student-dialog/update-student-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Observable, Subscription, of} from "rxjs";
import {TableService} from "./table.service";

// import edit

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent{


  @Input() students: Student[] = [];
  @Input() selectedColumns: string[] = [];

  specializations: Observable<string[]> = of([]);
  degrees: Observable<number[]> =  of([]);
  semesters: Observable<number[]> =  of([]);


  updateStudentSubscription?: Subscription;
  deleteStudentSubscription?: Subscription;

  @Output() tableEventEmitter = new EventEmitter<void>();

  constructor(public dialog: MatDialog, private service: TableService) {
  }

  ngOnInit(){
    // TODO replace when the backend endpoints are ready
    this.specializations = this.service.querySpecializations();
    this.degrees = this.service.queryDegrees();
    this.semesters = this.service.querySemesters();
  }


  openUpdateStudentDialog(selectedStudent: Student){
    const dialogRef = this.dialog.open(UpdateStudentDialogComponent, {
      data: {
        student: selectedStudent,
        specializations: this.specializations,
        degrees: this.degrees,
        semesters: this.semesters
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === undefined) return;
      if(result === '') return;
      this.updateStudentSubscription = this.service.updateStudent(result).subscribe(res => {
        console.log(res);
        this.tableEventEmitter.emit();
      })
    });
  }

  onDeleteStudentClicked(selectedStudent: Student){
    this.deleteStudentSubscription = this.service.deleteStudent(selectedStudent).subscribe(res => {
      console.log(res);
      this.tableEventEmitter.emit();
    })
  }

}
