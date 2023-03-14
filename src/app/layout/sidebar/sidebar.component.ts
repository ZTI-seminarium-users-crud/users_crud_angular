import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CheckboxFilter } from './checkbox-filter/checkbox-filter.component';
import { FiltersService } from './filters-service/filters.service';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private filtersService: FiltersService){}
  specializations: Observable<CheckboxFilter[]> = of([]);
  degrees: Observable<CheckboxFilter[]> = of([]);
  semesters: Observable<CheckboxFilter[]> = of([]);

  ngOnInit(){
    this.specializations = this.filtersService.querySpecializations();  
    this.degrees = this.filtersService.queryDegrees();
    this.semesters = this.filtersService.querySemesters();
  }


}
