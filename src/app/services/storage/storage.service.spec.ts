import {inject, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


import {StorageService} from './storage.service';
import {HttpEvent, HttpEventType} from '@angular/common/http';

describe('StorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
  ]}));

  it('should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });

  it('should get data',
    inject([HttpTestingController, StorageService],
      (httpMock: HttpTestingController, storageService: StorageService) => {
        storageService.read("id").subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual("test");
          }
        });
        const mockReq = httpMock.expectOne("id");
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush("test");

        httpMock.verify();
      }
    )
  );
});
