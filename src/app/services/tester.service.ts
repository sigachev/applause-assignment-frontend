import { Injectable } from '@angular/core';
import {Device} from '../models/device';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ErrorService} from './error.service';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Tester} from '../models/tester';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TesterService {
  apiUrl = environment.apiUrl ;
  private testers: Tester[];
  private countryList: string[];

  constructor( private http: HttpClient,
               private router: Router,
               private errorService: ErrorService) {}

  getAll(): Observable<Tester[]> {
    return this.http.get(this.apiUrl + '/testers').pipe(
      map((data: Tester[]) => {
        return data;
      }),
      catchError( this.errorService.handleError)
    );
  }

  getAvailableCountries(): Observable<string[]> {
    return this.http.get(this.apiUrl + '/countries').pipe(
      map((data: string[]) => {
        this.countryList = data;
        return data;
      }),
      catchError( this.errorService.handleError)
    );
  }
}
