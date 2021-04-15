import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// *******************************************************************************
// NgBootstrap

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// *******************************************************************************
// App

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppService } from './app.service';
import { LayoutModule } from './layout/layout.module';

// *******************************************************************************
// Pages

import { HomeComponent } from './components/home/home.component';
import { DevicesComponent } from './components/devices/devices.component';
import { TestersComponent } from './components/testers/testers.component';
import {NgSelectModule} from '@ng-select/ng-select';
import {TesterService} from './services/tester.service';
import {HttpClientModule} from '@angular/common/http';
import {DeviceService} from './services/device.service';
import {SearchService} from './services/search.service';

// *******************************************************************************
//

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

    // Pages
    HomeComponent,
    DevicesComponent,
    TestersComponent
  ],

  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    // App
    AppRoutingModule,
    LayoutModule,
    NgSelectModule,
    FormsModule
  ],

  providers: [
    Title,
    AppService,
    TesterService,
    DeviceService,
    SearchService
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
