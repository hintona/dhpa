import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
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
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
