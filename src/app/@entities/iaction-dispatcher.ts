import {IAction} from './iaction';
import {Observable} from 'rxjs';

export interface IActionDispatcher {
  dispatch(action: IAction): Observable<IAction>;
}
