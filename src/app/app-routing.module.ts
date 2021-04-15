import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

// *******************************************************************************
// Layouts

import { Layout1Component } from './layout/layout-1/layout-1.component';

// *******************************************************************************
// Pages

import { HomeComponent } from './components/home/home.component';
import { DevicesComponent } from './components/devices/devices.component';
import {TestersComponent} from './components/testers/testers.component';

// *******************************************************************************
// Routes

const routes: Routes = [

  { path: '', component: Layout1Component, pathMatch: 'full', children: [
    { path: '', component: HomeComponent },
  ]},

  { path: 'testers', component: Layout1Component, children: [
      { path: '', component: TestersComponent },
    ]},

  { path: 'devices', component: Layout1Component, children: [
      { path: '', component: DevicesComponent },
    ]},

  // 404 Not Found page
  { path: '**', component: NotFoundComponent }

];

// *******************************************************************************
//

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
