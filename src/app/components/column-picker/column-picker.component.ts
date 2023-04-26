import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { COLUMN_NAMES, columnNamesList, QueryParams  } from 'src/app/consts';

@Component({
  selector: 'app-column-picker',
  templateUrl: './column-picker.component.html',
  styleUrls: ['./column-picker.component.scss']
})



export class ColumnPickerComponent {

  columnNames: COLUMN_NAMES[] = columnNamesList;
  selectedColumns: COLUMN_NAMES[] = [...columnNamesList];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  emitSelectedColumnsChange() {
    const newQueryParams: QueryParams = {
      ...this.activatedRoute.snapshot.queryParams as QueryParams,
      columnsStringified: this.selectedColumns.join(',')
    }

    this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: newQueryParams});
  }

}
