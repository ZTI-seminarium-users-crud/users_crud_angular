import { Component, Input } from '@angular/core';
import { Student } from 'src/app/consts';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {


  @Input() students: Student[] = [];
  @Input() selectedColumns: string[] = [];

}
