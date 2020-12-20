import {Injectable} from '@angular/core';
import {AuthenticationManagerService} from '../managers/authentication-manager.service';
import {IAction} from '../../@entities/iaction';
import {Observable} from 'rxjs';
import {ActionTypes} from './action-types.enum';
import {map} from 'rxjs/operators';
import {UserManagerService} from '../managers/user-manager.service';

@Injectable({
  providedIn: 'root'
})
export class DispatcherService {

  constructor(
    private authenticationManagerService: AuthenticationManagerService,
    private userManagerService: UserManagerService
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
      default:
        throw Error('Invalid action type');
    }
  }
}
