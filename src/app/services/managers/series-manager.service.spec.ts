import {TestBed} from '@angular/core/testing';

import {SeriesManagerService} from './series-manager.service';

describe('SeriesManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeriesManagerService = TestBed.get(SeriesManagerService);
    expect(service).toBeTruthy();
  });
});
