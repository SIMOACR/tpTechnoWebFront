import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SeriesListComponent} from './series-list/series-list.component';
import {SeriesEditComponent} from './series-edit/series-edit.component';

const routes: Routes = [
  {
    path: '',
    component: SeriesListComponent
  },
  {
    path: 'edit/:id',
    component: SeriesEditComponent
  },
  {
    path: 'edit',
    component: SeriesEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
