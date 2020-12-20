import {IChanges} from './ichanges';
import {Observable} from 'rxjs';

export interface IManager<T> {
  collection: Array<T>;

  create(data: IChanges): Observable<T>;

  read(): Observable<T[]>;
  read(id: number): Observable<T>;

  update(target: T, changes: IChanges): Observable<T>;

  delete(target: T): Observable<boolean>;
}
