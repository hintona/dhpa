import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core'
import { AppComponent } from './app.component';
import { AboutComponent } from './AboutPage/about/about.component';
import { PracticeareasComponent } from './PracticePage/practiceareas/practiceareas.component';
import { HomeComponent } from './HomePage/home/home.component';
import { MapComponent } from './HomePage/map/map.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PracticeareasComponent,
    HomeComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBI6EJnkZnaB4El7hk_1ldPXmZcKZtyDCo'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
