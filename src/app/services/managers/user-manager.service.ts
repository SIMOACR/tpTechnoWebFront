import {Injectable} from '@angular/core';
import {IManager} from '../../@entities/imanager';
import {IUser} from '../../@entities/IUser';
import {IChanges} from '../../@entities/ichanges';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {StorageService} from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserManagerService implements IManager<IUser>{

  private url = environment.apiUrl + environment.resourceUri.user;
  collection: Array<IUser>;

  constructor(
    private storageService: StorageService
  ) { }

  create(data: IChanges): Observable<IUser> {
    return this.storageService.create(this.url, data);
  }

  delete(target: IUser): Observable<boolean> {
    return undefined;
  }

  read(): Observable<IUser[]>;
  read(id: number): Observable<IUser>;
  read(id?: number): Observable<IUser[]> | Observable<IUser> {
    return undefined;
  }

  update(target: IUser, changes: IChanges): Observable<IUser> {
    return undefined;
  }
}
