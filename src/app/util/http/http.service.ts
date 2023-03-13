import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { share, catchError } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';


const apiUrl = 'http://localhost:4000/api/';


export enum ApiEndpoint{
  SPECIALIZATIONS = 'filters/specialization',
}

export type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';


@Injectable({
  providedIn: 'root'
})
export class HttpService {
  

  constructor(private http: HttpClient, private _error: ErrorService,) {

  }

  requestCall(apiMethod: ApiMethod, apiEndpoint: ApiEndpoint, data?: any){
    let response;
      switch(apiMethod){
        case 'GET':
          response = this.http.get(apiUrl);
          break;
        case 'POST':
          response = this.http.post(apiUrl, data);
          break;
        case 'PUT':
          response = this.http.put(apiUrl, data);
          break;
        case 'DELETE':
          response = this.http.delete(apiUrl);
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
