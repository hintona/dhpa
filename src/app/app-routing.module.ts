import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './AboutPage/about/about.component';
import { HomeComponent } from './HomePage/home/home.component';
import { CollectComponent } from './PracticeAreas/collect/collect.component';
import { ComLitComponent } from './PracticeAreas/com-lit/com-lit.component';
import { ConLawComponent } from './PracticeAreas/con-law/con-law.component';
import { DOMComponent } from './PracticeAreas/dom/dom.component';
import { EstateComponent } from './PracticeAreas/estate/estate.component';
import { FOCComponent } from './PracticeAreas/foc/foc.component';
import { MFDComponent } from './PracticeAreas/mfd/mfd.component';
import { PatComponent } from './PracticeAreas/pat/pat.component';
import { ProbateComponent } from './PracticeAreas/probate/probate.component';
import { RETComponent } from './PracticeAreas/ret/ret.component';
import { TrustsComponent } from './PracticeAreas/trusts/trusts.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'dissolution-of-marriage', component: DOMComponent},
  { path: 'commercial-litigation', component: ComLitComponent},
  { path: 'paternity-child-support', component: PatComponent},
  { path: 'contract-law', component: ConLawComponent},
  { path: 'estate-planning-wills-etc', component: EstateComponent},
  { path: 'probate', component: ProbateComponent},
  { path: 'real-estate-transactions', component: RETComponent},
  { path: 'trusts', component: TrustsComponent},
  { path: 'mortgage-foreclosure-defense', component: MFDComponent},
  { path: 'formation-of-corporations', component: FOCComponent},
  { path: 'collections', component: CollectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
