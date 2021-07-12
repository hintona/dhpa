import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './AboutPage/about/about.component';
import { PracticeareasComponent } from './PracticePage/practiceareas/practiceareas.component';
import { HomeComponent } from './HomePage/home/home.component';
import { MapComponent } from './HomePage/map/map.component';
import { ContactformComponent } from './HomePage/contactform/contactform.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PracticeareasComponent,
    HomeComponent,
    MapComponent,
    ContactformComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    MatSelectModule,
    MatRadioModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
