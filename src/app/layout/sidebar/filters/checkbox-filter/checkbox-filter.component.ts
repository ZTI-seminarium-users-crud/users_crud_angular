import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MAT_CHECKBOX_DEFAULT_OPTIONS, MatCheckboxChange, MatCheckboxDefaultOptions } from '@angular/material/checkbox';
import { CheckboxFilter } from 'src/app/consts';



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
  @Output() filterChange = new EventEmitter< (string | number)[]>();

  handleHeaderCheckbox(event: any){
    this.checkboxFilters = this.checkboxFilters.map( 
      areAllChecked(this.checkboxFilters) ? convertCheckboxFilterToUnchecked : convertCheckboxFilterToChecked
    );
    this.handleCheckbox();
  }

  handleCheckbox(){
    const checkedCheckboxes = this.checkboxFilters
      .filter(checkbox => checkbox.isChecked)

    this.filterChange.emit(checkedCheckboxes.map(checkbox => checkbox.name));
  }

  shouldHeaderCheckboxBeIndeterminate = () => !areAllChecked(this.checkboxFilters) && areAnyChecked(this.checkboxFilters);

  shouldHeaderCheckboxBeChecked = () =>  areAllChecked(this.checkboxFilters);

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

// function isCheckboxFiltersNumbers(checkboxFilters: CheckboxFilter[]): checkboxFilters is CheckboxFilterNumber[] {
//   return typeof checkboxFilters[0].name === 'number';
// }

// function isCheckboxFiltersStrings(checkboxFilters: CheckboxFilter[]): checkboxFilters is CheckboxFilterString[] {
//   return !isCheckboxFiltersNumbers(checkboxFilters)
// }