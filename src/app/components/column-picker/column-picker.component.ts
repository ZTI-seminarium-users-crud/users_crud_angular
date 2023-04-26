import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { ActivatedRoute, Router } from '@angular/router';
import { COLUMN_NAMES, columnNamesList, QueryParams, sleep  } from 'src/app/consts';
import { QueryParametersService } from 'src/app/util/query-parameters/query-parameters.service';

@Component({
  selector: 'app-column-picker',
  templateUrl: './column-picker.component.html',
  styleUrls: ['./column-picker.component.scss']
})



export class ColumnPickerComponent implements OnInit {

  columnNames: COLUMN_NAMES[] = columnNamesList;
  selectedColumns: COLUMN_NAMES[] = [...columnNamesList];

  constructor(private queryParametersService: QueryParametersService
  ) { }


  ngOnInit(): void {
    this.emitSelectedColumnsChange();
    
  }

  emitSelectedColumnsChange() {
    
    const oldQueryParams = this.getQueryParams();
    const newQueryParams: QueryParams = {
      ...oldQueryParams,
      columnsStringified: this.selectedColumns.join(',')
    }

    this.updateQueryString(newQueryParams);
  }

  private getQueryParams(){
    return this.queryParametersService.getQueryParams();
  }


  private updateQueryString(newQueryParams: QueryParams){
    this.queryParametersService.updateQueryParams(newQueryParams);
    // sleep(100);
    this.queryParametersService.commitQueryParams();  }

}
