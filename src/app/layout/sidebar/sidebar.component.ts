import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FiltersService } from './filters-service/filters.service';




@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  constructor(private filtersService: FiltersService){}
  specializations: Observable<string[]> = of([]);
  degrees: Observable<string[]> = of([]);
  semesters: Observable<string[]> = of([]);

  ngOnInit(){
    this.specializations = this.filtersService.querySpecializations();  
    this.degrees = this.filtersService.queryDegrees();
    this.semesters = this.filtersService.querySemesters();
  }


}
