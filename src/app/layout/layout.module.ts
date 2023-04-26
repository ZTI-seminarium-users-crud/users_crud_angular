import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CheckboxFilterComponent } from './sidebar/filters/checkbox-filter/checkbox-filter.component';
import { MaterialModule } from '../util/material/material.module';
import { FormsModule } from '@angular/forms';
import { CheckboxHeaderComponent } from './sidebar/filters/checkbox-filter/checkbox-header/checkbox-header.component';
import { FiltersComponent } from './sidebar/filters/filters.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    CheckboxFilterComponent,
    CheckboxHeaderComponent,
    FiltersComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    
  ]
})
export class LayoutModule { }
