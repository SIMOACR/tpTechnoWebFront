import {Injectable} from '@angular/core';
import {IManager} from '../../@entities/imanager';
import {IEvent} from '../../@entities/IEvent';
import {IChanges} from '../../@entities/ichanges';
import {Observable} from 'rxjs';
import {StorageService} from '../storage/storage.service';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';

@Injectable({
  providedIn: 'root'
})
export class EventManagerService implements IManager<IEvent>{

  collection: Array<IEvent>;
  private url = environment.apiUrl + environment.resourceUri.event;

  constructor(
    private storageService: StorageService
  ) { }

  create(data: IChanges): Observable<IEvent> {
    return undefined;
  }

  delete(target: IEvent): Observable<boolean> {
    return this.storageService.delete(`${this.url}/${target.id}`).pipe(
      map(data => !isNullOrUndefined(data))
    );
  }

  read(): Observable<IEvent[]>;
  read(id: number): Observable<IEvent>;
  read(id?: number): Observable<IEvent[]> | Observable<IEvent> {
    return undefined;
  }

  readBySeriesId(seriesId: number): Observable<IEvent[]> {
    return this.storageService.read(this.url + '/series/' + seriesId);
  }

  readByUserNameAndTag(username: string, tag: string): Observable<IEvent[]> {
    return this.storageService.read(this.url + '/tag/' + username + '/' + tag);
  }

  readTagLastOccurrenceByUserNameAndTag(username: string, tag: string): Observable<Date> {
    return this.storageService.read(this.url + '/tagLastOccurrence/' + username + '/' + tag);
  }

  update(target: IEvent, changes: IChanges): Observable<IEvent> {
    return undefined;
  }
}
