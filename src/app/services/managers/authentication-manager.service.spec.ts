import {TestBed} from '@angular/core/testing';

import {AuthenticationManagerService} from './authentication-manager.service';

describe('AuthenticationManagerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthenticationManagerService = TestBed.get(AuthenticationManagerService);
    expect(service).toBeTruthy();
  });
});
