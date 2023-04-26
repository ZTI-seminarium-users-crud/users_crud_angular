import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Filters, defaultFilters, CheckboxFilter } from 'src/app/consts';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnChanges{
  constructor(){}
  
  @Input() specializations: string[] = [];
  @Input() degrees: number[] = [];
  @Input() semesters: number[] = [];

  specializationsCheckboxes: CheckboxFilter[] = [];
  degreesCheckboxes: CheckboxFilter[] = [];
  semestersCheckboxes: CheckboxFilter[] = [];

  selectedFilters: Filters = defaultFilters;

  @Output() filtersChange = new EventEmitter<Filters>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('hello from ngOnChanges')
    const specializationsChanges = changes['specializations'];
    if (specializationsChanges){
      this.specializationsCheckboxes = convertArrayToCheckboxFiltersArray(specializationsChanges.currentValue);
    }
    const degreesChanges = changes['degrees'];
    if(degreesChanges){
      this.degreesCheckboxes = convertArrayToCheckboxFiltersArray(degreesChanges.currentValue);
    }
    const semestersChanges = changes['semesters'];
    if(semestersChanges){
      this.semestersCheckboxes = convertArrayToCheckboxFiltersArray(semestersChanges.currentValue);
    }
  }


  handleSpecializationFilterChange(newValues: (string | number)[]){
    console.log('hello from handleSpecializationFilterChange')
    this.selectedFilters = {
      ...this.selectedFilters,
      specializations: newValues as string[]
    }
    this.filtersChange.emit(this.selectedFilters);
  }

  handleDegreesFilterChange(newValues: (string | number)[]){
    console.log('hello from handleDegreesFilterChange')
    this.selectedFilters = {
      ...this.selectedFilters,
      degrees: newValues as number[]
    }
    this.filtersChange.emit(this.selectedFilters);
  }

  handleSemestersFilterChange(newValues: (string | number)[]){
    // console.log('hello from handleSemestersFilterChange')
    this.selectedFilters = {
      ...this.selectedFilters,
      semesters: newValues as number[]
    }
    this.filtersChange.emit(this.selectedFilters);
  }

 
  
}

function convertArrayToCheckboxFiltersArray(array: (string | number)[]): CheckboxFilter[]{
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

