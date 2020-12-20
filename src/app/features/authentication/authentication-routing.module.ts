import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationPageComponent} from './authentication-page/authentication-page.component';

const routes: Routes = [
  {
    path: 'authentication',
    component: AuthenticationPageComponent
  },
  {
    path: '', redirectTo: 'authentication', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
