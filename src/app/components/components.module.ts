import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { ColumnPickerComponent } from './column-picker/column-picker.component';
import { MaterialModule } from '../util/material/material.module';
import { FormsModule } from '@angular/forms';

import { PageNavigatorComponent } from './page-navigator/page-navigator.component';

import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    TableComponent,
    ColumnPickerComponent,
    PageNavigatorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    MatPaginatorModule
  ],
  exports: [
    TableComponent,
    ColumnPickerComponent,
    PageNavigatorComponent,
  ]
})
export class ComponentsModule { }
