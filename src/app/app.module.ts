import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { MDBBootstrapModule, ModalModule } from 'angular-bootstrap-md';
import { MatButtonModule } from '@angular/material/button'; 
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './AboutPage/about/about.component';
import { HomeComponent } from './HomePage/home/home.component';
import { MapComponent } from './HomePage/map/map.component';
import { ContactformComponent } from './HomePage/contactform/contactform.component';
import { RouterModule } from '@angular/router';
import { DOMComponent } from './PracticeAreas/dom/dom.component';
import { ComLitComponent } from './PracticeAreas/com-lit/com-lit.component';
import { PatComponent } from './PracticeAreas/pat/pat.component';
import { ConLawComponent } from './PracticeAreas/con-law/con-law.component';
import { EstateComponent } from './PracticeAreas/estate/estate.component';
import { ProbateComponent } from './PracticeAreas/probate/probate.component';
import { RETComponent } from './PracticeAreas/ret/ret.component';
import { TrustsComponent } from './PracticeAreas/trusts/trusts.component';
import { MFDComponent } from './PracticeAreas/mfd/mfd.component';
import { FOCComponent } from './PracticeAreas/foc/foc.component';
import { CollectComponent } from './PracticeAreas/collect/collect.component';
import { DiscModalComponent } from './disc-modal/disc-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    MapComponent,
    ContactformComponent,
    DOMComponent,
    ComLitComponent,
    PatComponent,
    ConLawComponent,
    EstateComponent,
    ProbateComponent,
    RETComponent,
    TrustsComponent,
    MFDComponent,
    FOCComponent,
    CollectComponent,
    DiscModalComponent
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
    MatInputModule,
    MatCheckboxModule
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
