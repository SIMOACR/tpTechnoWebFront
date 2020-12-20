import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthenticationModule} from './authentication/authentication.module';


@NgModule({
  declarations: [],
    imports: [
      CommonModule,
      FormsModule,
      AuthenticationModule
    ],
  exports: [
    AuthenticationModule
  ]
})
export class FeaturesModule { }
