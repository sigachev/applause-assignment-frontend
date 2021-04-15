import { Injectable } from '@angular/core';
import {Tester} from '../models/tester';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {ErrorService} from './error.service';
import {Observable} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {SearchResult} from '../models/search-result';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  apiUrl = environment.apiUrl ;
  private searchResults: SearchResult[];
  private countryList: string[];

  constructor( private http: HttpClient,
               private router: Router,
               private errorService: ErrorService) {}

  search(countries: string[], devices: number[]): Observable<SearchResult[]> {
    let params: HttpParams;
    params = new HttpParams()
      .set('countries', countries.toString())
      .set('devices', devices.toString());

    return this.http.get(this.apiUrl + '/search', {params}).pipe(
      map((data: SearchResult[]) => {
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
