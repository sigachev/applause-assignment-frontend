import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Device} from '../models/device';
import {catchError, map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ErrorService} from './error.service';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  apiUrl = environment.apiUrl ;
  private devices: Device[];

  constructor( private http: HttpClient,
               private router: Router,
               private errorService: ErrorService) {}

  getAll(): Observable<Device[]> {
    return this.http.get(this.apiUrl + '/devices').pipe(
      map((data: Device[]) => {
        return data;
      }),
      catchError( this.errorService.handleError)
    );
  }
}
