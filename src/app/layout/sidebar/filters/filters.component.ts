import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Filters, defaultFilters, CheckboxFilter, QueryParams, sleep } from 'src/app/consts';
import { QueryParametersService } from 'src/app/util/query-parameters/query-parameters.service';

import queryString from 'query-string';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnChanges, OnInit{
  constructor(private queryParametersService: QueryParametersService
    ){}

  
  @Input() specializations: string[] = [];
  @Input() degrees: number[] = [];
  @Input() semesters: number[] = [];

  specializationsCheckboxes: CheckboxFilter[] = [];
  degreesCheckboxes: CheckboxFilter[] = [];
  semestersCheckboxes: CheckboxFilter[] = [];
  
 

  // this will be executed after ngOnChanges
  ngOnInit(): void {
    console.log(location.search);
    const currentQueryString = location.search;
    const parsedQueryString = queryString.parse(location.search) as any as QueryParams;

    if(parsedQueryString.specializationsStringified === ''){
      this.updateSpecializationsQueryParams(this.specializations)
    }else{
      const selectedSpecializations = unstringifyToStringArray(parsedQueryString.specializationsStringified);
      this.specializationsCheckboxes = getAllCheckOnlySelected(this.specializationsCheckboxes, selectedSpecializations);
    }

    if(parsedQueryString.degreesStringified === ''){
      this.updateDegreesQueryParams(this.degrees)
    }else{
      const selectedDegrees = unstringifyToNumbersArray(parsedQueryString.degreesStringified);
      this.degreesCheckboxes = getAllCheckOnlySelected(this.degreesCheckboxes, selectedDegrees);
    }

    if(parsedQueryString.semestersStringified === ''){
      this.updateSemestersQueryParams(this.semesters)
    }else{
      const selectedSemesters = unstringifyToNumbersArray(parsedQueryString.semestersStringified);
      this.semestersCheckboxes = getAllCheckOnlySelected(this.semestersCheckboxes, selectedSemesters);
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('hello from ngOnChanges')

    this.handleSpecializationsChangesFromParent(changes);
    this.handleDegreesChangesFromParent(changes);
    this.handleSemestersChangesFromParent(changes);
    console.log('bye from ngOnChanges')
  }

  private handleSpecializationsChangesFromParent(changes: SimpleChanges){
    const changesUnboxed = changes['specializations'];
    if(changesUnboxed) this.specializationsCheckboxes = convertArrayToCheckboxFiltersArray(changesUnboxed.currentValue);
  }

  private handleDegreesChangesFromParent(changes: SimpleChanges){
    const changesUnboxed = changes['degrees'];
    if(changesUnboxed) this.degreesCheckboxes = convertArrayToCheckboxFiltersArray(changesUnboxed.currentValue);
    
  }

  private handleSemestersChangesFromParent(changes: SimpleChanges){
    const changesUnboxed = changes['semesters'];
    if(changesUnboxed) this.semestersCheckboxes = convertArrayToCheckboxFiltersArray(changesUnboxed.currentValue);

    
  }


  updateSpecializationsQueryParams(newValues: (string | number)[]){
    const newQueryParams: QueryParams = {
      ...this.getQueryParams(),
      specializationsStringified: stringifyArray(newValues)
    }
    this.updateQueryString(newQueryParams);
    
  }

  updateDegreesQueryParams(newValues: (string | number)[]){
    const newQueryParams: QueryParams = {
      ...this.getQueryParams(),
      degreesStringified: stringifyArray(newValues)
    }
    this.updateQueryString(newQueryParams);
  }

  updateSemestersQueryParams(newValues: (string | number)[]){
    const newQueryParams: QueryParams = {
      ...this.getQueryParams(),
      semestersStringified: stringifyArray(newValues)
    }
    this.updateQueryString(newQueryParams);
  }

  private getQueryParams(){
    return this.queryParametersService.getQueryParams();
  }

 
  private updateQueryString(newQueryParams: QueryParams){
    this.queryParametersService.updateQueryParams(newQueryParams);
    sleep(1);
    this.queryParametersService.commitQueryParams();
  }
  
}

function getAllCheckOnlySelected(currentCheckboxes: CheckboxFilter[], selectedNames: (number | string)[]): CheckboxFilter[]{
  return currentCheckboxes.map(checkbox => {
    return {
      name: checkbox.name,
      isChecked: selectedNames.includes(checkbox.name)
    }
  })
}

function stringifyArray(array: (string|number)[]){
  return array.join(',');
}

function unstringifyToNumbersArray(stringifiedArray: string): number[]{
  return unstringifyToStringArray(stringifiedArray).map(numberAsString => parseInt(numberAsString));
}

function unstringifyToStringArray(stringifiedArray: string): string[]{
  return stringifiedArray.split(',');
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

