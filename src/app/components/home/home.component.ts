import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { AppService } from '../../app.service';
import {TesterService} from '../../services/tester.service';
import {Tester} from '../../models/tester';
import {DeviceService} from '../../services/device.service';
import {SearchService} from '../../services/search.service';
import {Device} from '../../models/device';
import {SearchResult} from '../../models/search-result';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [
    '../../../vendor/libs/angular-2-dropdown-multiselect/angular-2-dropdown-multiselect.scss',
    '../../../vendor/libs/ng-select/ng-select.scss'
  ]
})
export class HomeComponent implements OnInit {

  testers: Tester[];
  devices: Device[];
  countries: string[];
  searchResults: SearchResult[];

  selectedCountries: Array<any> = [];
  selectedDevices: Array<any> = [];

  @ViewChild('countriesSelect') countriesSelectRef: ElementRef;
  @ViewChild('devicesSelect') devicesSelectRef: ElementRef;

  constructor(private appService: AppService,
              private testerService: TesterService,
              private deviceService: DeviceService,
              private searchService: SearchService) {
    this.appService.pageTitle = 'Home - Search Bugs';
  }

  ngOnInit(): void {

    this.testerService.getAvailableCountries().subscribe((data: string[]) => {
      console.log(data);
      this.countries = data;
    });

    this.deviceService.getAll().subscribe((data: Device[]) => {
      console.log(data);
      this.devices = data;
    });

  }


  selectAllCountries(): void {
         this.selectedCountries = this.countries;
  }

  selectAllDevices(): void {
    this.selectedDevices = this.devices.map(d => d.id);
  }

  search() {
    return this.searchService.search(this.selectedCountries, this.selectedDevices).subscribe((data: SearchResult[]) => {
      console.log('Search results' + data);
      this.searchResults = data;
    });
  }
}
