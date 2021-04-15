import {Component, OnInit} from '@angular/core';
import { AppService } from '../../app.service';
import {TesterService} from '../../services/tester.service';
import {DeviceService} from '../../services/device.service';
import {SearchService} from '../../services/search.service';
import {Device} from '../../models/device';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html'
})
export class DevicesComponent implements OnInit {

  devices: Device[];

  constructor(private appService: AppService,
              private deviceService: DeviceService) {
    this.appService.pageTitle = 'Devices';
  }

  ngOnInit(): void {
    this.deviceService.getAll().subscribe(data => this.devices = data);
  }


}
