import { Component } from '@angular/core';

@Component({
  selector: 'app-column-picker',
  templateUrl: './column-picker.component.html',
  styleUrls: ['./column-picker.component.scss']
})



export class ColumnPickerComponent {
  columnNames: string[] = [
    "first_name",
    "last_name",
    "specialization",
    "degree",
    "semester",
  ]

  selectedColumns: string[] = [];
}
