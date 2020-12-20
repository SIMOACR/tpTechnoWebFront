import {Component, OnInit, ViewChild} from '@angular/core';
import {DispatcherService} from '../../../services/dispatcher/dispatcher.service';
import {Action} from '../../../services/dispatcher/action';
import {ActionTypes} from '../../../services/dispatcher/action-types.enum';
import {takeUntil} from 'rxjs/operators';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ISeries} from '../../../@entities/ISeries';
import {Subject, throwError} from 'rxjs';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.component.html',
  styleUrls: ['./series-list.component.scss']
})
export class SeriesListComponent implements OnInit {

  isLoaded = true;
  destroy$: Subject<boolean> = new Subject<boolean>();
  seriesList: ISeries[] = [];
  tableDataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['title', 'description', 'action'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    private dispatcherService: DispatcherService
  ) {
  }

  ngOnInit() {
    this.getSeriesList();
  }

  getSeriesList() {
    this.dispatcherService.dispatch(new Action(
      ActionTypes.GET_SERIES_LIST_BY_USERNAME,
      localStorage.getItem('username')
      )
    ).pipe(takeUntil(this.destroy$)).subscribe(
      action => {
        this.seriesList = action.result;
        console.log(this.seriesList);

        this.tableDataSource = new MatTableDataSource(this.seriesList);
        this.tableDataSource.sort = this.sort;
        this.tableDataSource.paginator = this.paginator;

        this.isLoaded = true;
      }
    );
  }

  applyFilter(filterValue: string) {
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteSeries(series: ISeries) {
    this.isLoaded = false;
    this.dispatcherService.dispatch(new Action(ActionTypes.DELETE_SERIES, series)).
    pipe(takeUntil(this.destroy$)).subscribe(next => {
        this.seriesList.splice(this.seriesList.indexOf(series), 1);
        this.tableDataSource = new MatTableDataSource(this.seriesList);
        this.isLoaded = true;
      }, (error) => {
        throwError('Failed to delete flight');
      }
    );
  }

}
