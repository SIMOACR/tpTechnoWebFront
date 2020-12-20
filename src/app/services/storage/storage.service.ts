import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  collection: any[];

  constructor(
    private http: HttpClient
  ) { }

  create(url: string, payload: any): Observable<any> {
    return this.http.post(url, payload);
  }

  createWithType(url: string, payload: any, type: any): Observable<any> {
    return this.http.post(url, payload, type);
  }

  read(url: string): Observable<any> {
    return this.http.get(url);
  }

  readWithPayload(url: string, payload: any): Observable<any> {
    return this.http.get(url, payload);
  }

  update(url: string, payload: any): Observable<any> {
    return this.http.put(url, payload);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }
}
