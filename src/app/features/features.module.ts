import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthenticationModule} from './authentication/authentication.module';
import {SeriesModule} from './series/series.module';


@NgModule({
  declarations: [],
    imports: [
      CommonModule,
      FormsModule,
      AuthenticationModule,
      SeriesModule
    ],
  exports: [
    AuthenticationModule,
    SeriesModule
  ]
})
export class FeaturesModule { }
