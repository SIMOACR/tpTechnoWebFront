import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Screen1Component} from './screens/screen1/screen1.component';


const routes: Routes = [
  {
    path: '',
    component: Screen1Component,
    loadChildren: './features/authentication/authentication.module#AuthenticationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
