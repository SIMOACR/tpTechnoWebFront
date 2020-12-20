import {Injectable} from '@angular/core';
import {IManager} from '../../@entities/imanager';
import {ISeries} from '../../@entities/ISeries';
import {IChanges} from '../../@entities/ichanges';
import {Observable} from 'rxjs';
import {StorageService} from '../storage/storage.service';
import {environment} from '../../../environments/environment';
import {isNullOrUndefined} from 'util';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SeriesManagerService implements IManager<ISeries>{

  private url = environment.apiUrl + environment.resourceUri.series;
  collection: Array<ISeries>;

  constructor(
    private storageService: StorageService
  ) { }

  create(data: IChanges): Observable<ISeries> {
    return this.storageService.create(this.url, data);
  }

  createWithUserName(data: IChanges): Observable<ISeries> {
    return this.storageService.create(this.url + '/userName', data);
  }

  delete(target: ISeries): Observable<boolean> {
    return this.storageService.delete(`${this.url}/${target.id}`).pipe(
      map(data => !isNullOrUndefined(data))
    );
  }

  read(): Observable<ISeries[]>;
  read(id: number): Observable<ISeries>;
  read(id?: number): Observable<ISeries[]> | Observable<ISeries> {
    if (id) {
      return this.storageService.read(this.url + '/' + id);
    } else {
      return this.storageService.read(this.url);
    }
  }

  readByUserName(username: string): Observable<ISeries[]> {
    return this.storageService.read(this.url + '/user/' + username);
  }

  update(target: ISeries): Observable<ISeries> {
    return this.storageService.update(this.url, target);
  }

  updateWithUserName(data: IChanges): Observable<ISeries> {
    return this.storageService.update(this.url + '/userName', data);
  }

}
