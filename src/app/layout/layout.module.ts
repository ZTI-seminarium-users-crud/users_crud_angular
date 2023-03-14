import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CheckboxFilterComponent } from './sidebar/checkbox-filter/checkbox-filter.component';
import { MaterialModule } from '../util/material/material.module';
import { FormsModule } from '@angular/forms';
import { CheckboxHeaderComponent } from './sidebar/checkbox-filter/checkbox-header/checkbox-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    CheckboxFilterComponent,
    CheckboxHeaderComponent
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
