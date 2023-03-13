import { Component, Input } from '@angular/core';


export type CheckboxFilter = {
  name: string,
  isChecked: boolean
}

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss']
})
export class CheckboxFilterComponent {

  checked: boolean = false;
  @Input() title: string = 'sample title';

  @Input() checkboxFilters: CheckboxFilter[] = []

  // checkboxes: boolean[] = [];

}
