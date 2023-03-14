import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { share, catchError } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';


// const apiBaseUrl = 'http://localhost:4000/api/';
const apiBaseUrl = 'http://localhost:3000/api/';


export enum ApiEndpoint{
  FILTERS_SPECIALIZATIONS = 'filters/specializations',
  FILTERS_DEGREES = 'filters/degrees',
  FILTERS_SEMESTERS = 'filters/semesters',
}

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private http: HttpClient, private _error: ErrorService,) {

  }

  requestCall(apiMethod: ApiMethod, apiEndpoint: ApiEndpoint, data?: any){
    const url = `${apiBaseUrl}${apiEndpoint}`;
    let response;
      switch(apiMethod){
        case 'GET':
          response = this.http.get(url);
          break;
        case 'POST':
          response = this.http.post(url, data);
          break;
        case 'PUT':
          response = this.http.put(url, data);
          break;
        case 'DELETE':
          response = this.http.delete(url);
          break;
      }
      return response?.pipe(share())
      .pipe(catchError( async err => this.handleError(err)));
  }

  handleError(error: HttpErrorResponse){
    console.error(JSON.stringify(error));
    // if(error instanceof HttpErrorResponse){
    //   this._error.whichError(error.status, error.message);
    //   throw error;
    // }
    // console.error('An unknown error occured:', error);

  }
}