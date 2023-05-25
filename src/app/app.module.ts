import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './util/material/material.module';
import { LayoutModule } from './layout/layout.module';
import { ComponentsModule } from './components/components.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddStudentDialogComponent } from './dialogs/add-student-dialog/add-student-dialog.component';
import { UpdateStudentDialogComponent } from './dialogs/update-student-dialog/update-student-dialog.component';
import { AreYouSureDialogComponent } from './dialogs/are-you-sure-dialog/are-you-sure-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    AddStudentDialogComponent,
    UpdateStudentDialogComponent,
    AreYouSureDialogComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
