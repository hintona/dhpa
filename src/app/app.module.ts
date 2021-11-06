import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatButtonModule } from '@angular/material/button'; 
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
import { RouterModule } from '@angular/router';


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
    FormsModule,
    MDBBootstrapModule.forRoot(),
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatInputModule
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
