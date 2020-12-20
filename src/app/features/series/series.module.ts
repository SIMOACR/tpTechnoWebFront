import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule, MatPaginatorModule, MatProgressSpinnerModule, MatTableModule} from '@angular/material';
import {SeriesRoutingModule} from './series-routing.module';
import {SeriesListComponent} from './series-list/series-list.component';
import {SeriesEditComponent} from './series-edit/series-edit.component';


@NgModule({
  declarations: [SeriesListComponent, SeriesEditComponent],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [
    SeriesRoutingModule
  ]
})
export class SeriesModule { }
