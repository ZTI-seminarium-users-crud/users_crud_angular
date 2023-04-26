import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Filters, defaultFilters, CheckboxFilter, QueryParams } from 'src/app/consts';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnChanges{
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    ){}
  
  @Input() specializations: string[] = [];
  @Input() degrees: number[] = [];
  @Input() semesters: number[] = [];

  specializationsCheckboxes: CheckboxFilter[] = [];
  degreesCheckboxes: CheckboxFilter[] = [];
  semestersCheckboxes: CheckboxFilter[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    console.log('hello from ngOnChanges')

    const newQueryParamsA = this.handleSpecializationsChangesFromParent(changes, this.getQueryParams());
    const newQueryParamsB = this.handleDegreesChangesFromParent(changes, newQueryParamsA);
    const newQueryParamsC = this.handleSemestersChangesFromParent(changes, newQueryParamsB);


    this.updateQueryString(newQueryParamsC);
  }

  private handleSpecializationsChangesFromParent(changes: SimpleChanges, queryParams: QueryParams): QueryParams{
    const changesUnboxed = changes['specializations'];
    if(!changesUnboxed) return queryParams;

    this.specializationsCheckboxes = convertArrayToCheckboxFiltersArray(changesUnboxed.currentValue);
    
    return {
      ...queryParams,
      specializationsStringified: (changesUnboxed.currentValue).join(','),
    }
  }

  private handleDegreesChangesFromParent(changes: SimpleChanges, queryParams: QueryParams): QueryParams{
    const changesUnboxed = changes['degrees'];
    if(!changesUnboxed) return queryParams;
    this.degreesCheckboxes = convertArrayToCheckboxFiltersArray(changesUnboxed.currentValue);
    return {
      ...queryParams,
      degreesStringified: (changesUnboxed.currentValue).join(','),
    }
  }

  private handleSemestersChangesFromParent(changes: SimpleChanges, queryParams: QueryParams): QueryParams{
    const changesUnboxed = changes['semesters'];
    if(!changesUnboxed) return queryParams;

    this.semestersCheckboxes = convertArrayToCheckboxFiltersArray(changesUnboxed.currentValue);

    return {
      ...queryParams,
      semestersStringified: (changesUnboxed.currentValue).join(','),
    }
  }


  handleSpecializationFilterChange(newValues: (string | number)[]){
    const newQueryParams: QueryParams = {
      ...this.getQueryParams(),
      specializationsStringified: (newValues).join(','),
    }
    this.updateQueryString(newQueryParams);
    
  }

  handleDegreesFilterChange(newValues: (string | number)[]){
    const newQueryParams: QueryParams = {
      ...this.getQueryParams(),
      degreesStringified: (newValues).join(',')
    }
    
    this.updateQueryString(newQueryParams);
  }

  handleSemestersFilterChange(newValues: (string | number)[]){
    const newQueryParams: QueryParams = {
      ...this.getQueryParams(),
      semestersStringified: (newValues).join(',')
    }
    this.updateQueryString(newQueryParams);
  }

  private getQueryParams(){
    return this.activatedRoute.snapshot.queryParams as QueryParams;
  }
 
  private updateQueryString(newQueryParams: QueryParams){
    this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: newQueryParams});
  }
  
}

function convertArrayToCheckboxFiltersArray(array: (string | number)[]): CheckboxFilter[]{
  console.log('hello from convertArrayToCheckboxFiltersArray')
  if(array === null) return [];
  if(array.length === 0) return [];
  return array.map(toCheckboxFilter)
}

export function toCheckboxFilter(value: string | number) {
  return {
      name: value,
      isChecked: true
  }
}

