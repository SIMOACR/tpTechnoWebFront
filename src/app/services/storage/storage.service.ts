import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  collection: any[];

  constructor(
    private http: HttpClient
  ) { }

  createWithoutHeader(url: string, payload: any): Observable<any> {
    return this.http.post(url, payload);
  }

  createAuthorizationHeader() {
    return new HttpHeaders({ Authorization: 'Bearer ' + localStorage.getItem('tokenId')});
  }

  create(url: string, payload: any): Observable<any> {
    return this.http.post(url, payload, { headers: this.createAuthorizationHeader() });
  }

  read(url: string): Observable<any> {
    // @ts-ignore
    return this.http.get(url, { headers: this.createAuthorizationHeader() });
  }

  update(url: string, payload: any): Observable<any> {
    // @ts-ignore
    return this.http.put(url, payload, { headers: this.createAuthorizationHeader() });
  }

  delete(url: string): Observable<any> {
    // @ts-ignore
    return this.http.delete(url, { headers: this.createAuthorizationHeader() });
  }
}
