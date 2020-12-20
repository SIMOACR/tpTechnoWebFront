import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DispatcherService} from '../../../services/dispatcher/dispatcher.service';
import {ISeries} from '../../../@entities/ISeries';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Action} from '../../../services/dispatcher/action';
import {ActionTypes} from '../../../services/dispatcher/action-types.enum';
import {ISeriesWithUserName} from '../../../@entities/ISeriesWithUserName';

@Component({
  selector: 'app-series-edit',
  templateUrl: './series-edit.component.html',
  styleUrls: ['./series-edit.component.scss']
})
export class SeriesEditComponent implements OnInit {

  destroy$: Subject<boolean> = new Subject<boolean>();
  series = {} as ISeries;
  seriesId = 0;
  isLoaded = true;

  constructor(
    private router: Router,
    private dispatcher: DispatcherService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.initSeries();
  }

  redirectToSeriesList() {
    this.router.navigate(['/series']);
  }

  initSeries() {

    this.activatedRoute.params.pipe(takeUntil(this.destroy$)).subscribe(
      params => {
        this.seriesId = +params.id;
      }
    );

    if (!isNaN(this.seriesId)) {
      this.dispatcher.dispatch(new Action(ActionTypes.GET_SERIES_BY_ID, this.seriesId)).
      pipe(takeUntil(this.destroy$)).subscribe(
        next => {
          this.series = next.result;
          this.isLoaded = true;
        }
      );
    } else {
      this.isLoaded = true;
    }
  }

  submit() {
    const seriesWithUserName = {
      id: this.seriesId,
      title : this.series.title,
      description: this.series.description,
      publicAccess: this.series.publicAccess,
      userName: localStorage.getItem('username')
    } as ISeriesWithUserName;

    let action: Action;
    if (this.seriesId === 0) {
      action = new Action(ActionTypes.ADD_SERIES_WITH_USERNAME, seriesWithUserName);
    } else {
      action = new Action(ActionTypes.UPDATE_SERIES_WITH_USERNAME, seriesWithUserName);
    }

    this.dispatcher.dispatch(action).subscribe(next => {
        this.series = next.result;
        this.redirectToSeriesList();
      }
    );
  }

}
