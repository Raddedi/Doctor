import { GraphTestComponent } from './component/graph-test/graph-test.component';
import { PatientComponent } from './component/patient/patient.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { AboutUsComponent } from './component/about-us/about-us.component';
import { IndexComponent } from './component/index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  {path:"",component:IndexComponent},
  {path:"login",component:LoginComponent},
  {path:"about-us",component:AboutUsComponent},
  {path:"accueil",component:AccueilComponent},
  {path:"patient",component:PatientComponent},
  {path:"graph-test",component:GraphTestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
