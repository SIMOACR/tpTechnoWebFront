import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Screen1Component} from './screen1/screen1.component';
import {RouterModule} from '@angular/router';
import {ComponentsModule} from '../components/components.module';
import {FeaturesModule} from '../features/features.module';


@NgModule({
  declarations: [Screen1Component],
    imports: [
        CommonModule,
        RouterModule,
        ComponentsModule,
        FeaturesModule
    ],
  exports: [
    Screen1Component
  ]
})
export class ScreensModule { }
