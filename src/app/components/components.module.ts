import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ColumnPickerComponent } from './column-picker/column-picker.component';



@NgModule({
  declarations: [
    TableComponent,
    ColumnPickerComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TableComponent,
    ColumnPickerComponent,
  ]
})
export class ComponentsModule { }
