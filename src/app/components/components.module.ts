import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ColumnPickerComponent } from './column-picker/column-picker.component';
import { MaterialModule } from '../util/material/material.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TableComponent,
    ColumnPickerComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    TableComponent,
    ColumnPickerComponent,
  ]
})
export class ComponentsModule { }
