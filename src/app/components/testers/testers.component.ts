import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {TesterService} from '../../services/tester.service';
import {Tester} from '../../models/tester';

@Component({
  selector: 'app-testers',
  templateUrl: './testers.component.html',
  styleUrls: ['./testers.component.css']
})
export class TestersComponent implements OnInit {

  testers: Tester[];

  constructor(private appService: AppService,
              private testerService: TesterService) {
    this.appService.pageTitle = 'Devices';
  }

  ngOnInit(): void {
    this.testerService.getAll().subscribe(data => this.testers = data);
  }

}
