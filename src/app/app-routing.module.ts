import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './AboutPage/about/about.component';
import { HomeComponent } from './HomePage/home/home.component';
import { PracticeareasComponent } from './PracticePage/practiceareas/practiceareas.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent },
  { path: 'practiceareas', component: PracticeareasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling: 'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
//TODO: Add in "About the Law" section which is basically just a blog area