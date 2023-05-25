import {Component, EventEmitter, Input, Output} from '@angular/core';
import {defaultPageNumber, defaultPageSize, PageSize} from "../../consts";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-page-navigator',
  templateUrl: './page-navigator.component.html',
  styleUrls: ['./page-navigator.component.scss'],
})
export class PageNavigatorComponent {

  pageSizeOptions: number[] = [5, 10, 20, 100]; // TODO zrobić ładniej
  @Input() pageSize: number=defaultPageSize;
  @Input() pageIndex: number=defaultPageNumber;
  length = 999; // TODO zrobić ładniej

  @Output() pageNavigatorEventEmitter = new EventEmitter<number[]>();
  pageEvent: PageEvent | undefined;
  handlePageEvent(event: PageEvent){
    this.pageEvent = event;

    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.pageNavigatorEventEmitter.emit([this.pageIndex, this.pageSize])
  }
  setPageSizeOptions(setPageSizeOptionsInput: string){
    if( setPageSizeOptionsInput){
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
}
