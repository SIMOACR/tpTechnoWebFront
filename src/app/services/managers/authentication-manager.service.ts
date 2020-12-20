import {Injectable} from '@angular/core';
import {IAuthenticationResponse} from '../../@entities/IAuthenticationResponse';
import {IChanges} from '../../@entities/ichanges';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {StorageService} from '../storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationManagerService {

  private url = environment.apiUrl + environment.resourceUri.authenticate;

  constructor(
    private storageService: StorageService
  ) { }

  authenticate(data: IChanges): Observable<IAuthenticationResponse> {
    return this.storageService.createWithoutHeader(this.url, data);
  }

}
