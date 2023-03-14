import { Component, Input } from '@angular/core';
import { MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckboxDefaultOptions } from '@angular/material/checkbox';


export type CheckboxFilter = {
  name: string,
  isChecked: boolean
}

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss'],
  // providers:  [{provide: MAT_CHECKBOX_DEFAULT_OPTIONS, useValue: { clickAction: 'noop' } as MatCheckboxDefaultOptions}]
})
export class CheckboxFilterComponent {

  // isMasterCheckboxChecked: boolean = false;
  @Input() title: string = 'sample title';
  @Input() checkboxFilters: CheckboxFilter[] = []



  handleHeaderCheckbox(event: any){
    this.checkboxFilters = this.checkboxFilters.map( 
      areAllChecked(this.checkboxFilters) ? convertCheckboxFilterToUnchecked : convertCheckboxFilterToChecked
    );
  }

  shouldHeaderCheckboxBeIndeterminate = () => !areAllChecked(this.checkboxFilters) && areAnyChecked(this.checkboxFilters);

  shouldHeaderCheckboxBeChecked = () =>  areAllChecked(this.checkboxFilters);

  

  // checkboxes: boolean[] = [];

}

const areAnyChecked = (checkboxFilters: CheckboxFilter[]) => checkboxFilters.some(checkboxFilter => checkboxFilter.isChecked);

const areAllChecked = (checkboxFilters: CheckboxFilter[]) => checkboxFilters.every(checkboxFilters => checkboxFilters.isChecked);

const convertCheckboxFilterToChecked = (checkboxFilter: CheckboxFilter) =>
  convertCheckboxFilterToHaveCheckedState(checkboxFilter, true)

const convertCheckboxFilterToUnchecked = (checkboxFilter: CheckboxFilter) =>
  convertCheckboxFilterToHaveCheckedState(checkboxFilter, false)

function convertCheckboxFilterToHaveCheckedState(checkboxFilter: CheckboxFilter, newState: boolean) {
  return {
    ...checkboxFilter,
    isChecked: newState
  }
}