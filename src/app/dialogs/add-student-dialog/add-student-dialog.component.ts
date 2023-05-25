import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { Student, StudentUnsavedToDatabase } from 'src/app/consts';
import { ApiEndpoint, ApiMethod, HttpService } from 'src/app/util/http/http.service';

export type AddStudentInputDataBundle = {
  student: StudentUnsavedToDatabase,
  specializations: Observable<string[]>,
  degrees: Observable<number[]>,
  semesters: Observable<number[]>
}

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']
})
export class AddStudentDialogComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<AddStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddStudentInputDataBundle,
    private http: HttpService
  ) {}

  ngOnInit(){
  }

  addStudent(student: StudentUnsavedToDatabase){

  }

}
