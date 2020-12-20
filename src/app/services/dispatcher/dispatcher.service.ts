import {Injectable} from '@angular/core';
import {AuthenticationManagerService} from '../managers/authentication-manager.service';
import {IAction} from '../../@entities/iaction';
import {Observable} from 'rxjs';
import {ActionTypes} from './action-types.enum';
import {map} from 'rxjs/operators';
import {UserManagerService} from '../managers/user-manager.service';
import {SeriesManagerService} from '../managers/series-manager.service';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {

  constructor(
    private authenticationManagerService: AuthenticationManagerService,
    private userManagerService: UserManagerService,
    private seriesManagerService: SeriesManagerService
  ) { }

  dispatch(action: IAction): Observable<IAction> {
    switch (action.type) {
      case ActionTypes.AUTHENTICATE:
        return this.authenticationManagerService.authenticate(action.data).pipe(
          map(value => {
            action.result = value;
            return action;
          })
        );
      case ActionTypes.ADD_USER:
        return this.userManagerService.create(action.data).pipe(
          map(value => {
            action.result = value;
            return action;
          })
        );
      case ActionTypes.GET_SERIES_BY_ID:
        return this.seriesManagerService.read(action.data).pipe(
          map(value => {
            action.result = value;
            return action;
          })
        );
      case ActionTypes.GET_SERIES_LIST:
        return this.seriesManagerService.read().pipe(
          map(value => {
            action.result = value;
            return action;
          })
        );
      case ActionTypes.GET_SERIES_LIST_BY_USERNAME:
        return this.seriesManagerService.readByUserName(action.data).pipe(
          map(value => {
            action.result = value;
            return action;
          })
        );
      case ActionTypes.DELETE_SERIES:
        return this.seriesManagerService.delete(action.data).pipe(
          map(value => {
            action.result = value;
            return action;
          })
        );
      case ActionTypes.ADD_SERIES_WITH_USERNAME:
        return this.seriesManagerService.createWithUserName(action.data).pipe(
          map(value => {
            action.result = value;
            return action;
          })
        );
      case ActionTypes.UPDATE_SERIES_WITH_USERNAME:
        return this.seriesManagerService.updateWithUserName(action.data).pipe(
          map(value => {
            action.result = value;
            return action;
          })
        );
      default:
        throw Error('Invalid action type');
    }
  }
}
