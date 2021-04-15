import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {SearchResult} from '../models/search-result';
import {Device} from '../models/device';
import {catchError, map} from 'rxjs/operators';
import {ErrorService} from './error.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  apiUrl = environment.apiUrl ;
  constructor( private http: HttpClient,
               private router: Router,
               private errorService: ErrorService) {}



  getAllTesters(): Observable<any> {
    return this.http.get(this.apiUrl + '/testers',
      {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
  }

  getAllDevices(): Observable<any> {
    return this.http.get(this.apiUrl + '/devices',
      {headers: {'Content-Type': 'application/json; charset=UTF-8'}});
  }

  getSearchResults(): Observable<Device[]> {
    return this.http.get(this.apiUrl + '/devices').pipe(
      map((data: Device[]) => {
        return data;
      }),
      catchError( this.errorService.handleError)
    );
  }

}
