import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueryParams, defaultPageSize } from 'src/app/consts';

@Injectable({
  providedIn: 'root'
})
export class QueryParametersService {

  queryParams: QueryParams = {
    columnsStringified: "",
    specializationsStringified: "",
    degreesStringified: "",
    semestersStringified: "",
    pageSize: defaultPageSize,
    pageNumber: 1,
  };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  updateQueryParams(newQueryParams: QueryParams){
    this.queryParams = {
      ...this.queryParams,
      ...newQueryParams
    };
  }

  getQueryParams(){
    return this.queryParams;
  }

  commitQueryParams(){
    this.router.navigate(['.'], { relativeTo: this.activatedRoute, queryParams: this.queryParams});
  }

}
