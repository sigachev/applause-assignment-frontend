import { Injectable } from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  message: '';

  constructor() {
  }

  public handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}, message: ${err.message},  body was: ${err.error}`;
    }
    console.error('Error service: ' + errorMessage);

    return throwError(err);
  }

}
