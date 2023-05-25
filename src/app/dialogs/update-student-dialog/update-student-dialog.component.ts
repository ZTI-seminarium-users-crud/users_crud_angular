import {Component, Inject, OnInit} from '@angular/core';
import {StudentUnsavedToDatabase, Student} from "../../consts";
import {Observable} from "rxjs";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpService} from "../../util/http/http.service";
import {TableService} from "../../components/table/table.service";

export type UpdateStudentInputDataBundle = {
  student: Student,
  specializations: Observable<string[]>,
  degrees: Observable<number[]>,
  semesters: Observable<number[]>
}
@Component({
  selector: 'app-update-student-dialog',
  templateUrl: './update-student-dialog.component.html',
  styleUrls: ['./update-student-dialog.component.scss']
})
export class UpdateStudentDialogComponent implements OnInit{

  constructor(
    public dialogRef: MatDialogRef<UpdateStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UpdateStudentInputDataBundle,
    private http: HttpService
    // public service: TableService
  ) {}

  ngOnInit(){
  }

  updateStudent(){

  }

}
