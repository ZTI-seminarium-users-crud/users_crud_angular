import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { COLUMN_NAMES, columnNamesList } from 'src/app/consts';

@Component({
  selector: 'app-column-picker',
  templateUrl: './column-picker.component.html',
  styleUrls: ['./column-picker.component.scss']
})



export class ColumnPickerComponent {

  columnNames: COLUMN_NAMES[] = columnNamesList;
  selectedColumns: COLUMN_NAMES[] = [...columnNamesList];
  @Output() selectedColumnsChange = new EventEmitter<COLUMN_NAMES[]>;

  constructor(){

  }


  emitSelectedColumnsChange(event: MatButtonToggleChange){
    this.selectedColumnsChange.emit(event.value);
    // debugger;
  }

}
