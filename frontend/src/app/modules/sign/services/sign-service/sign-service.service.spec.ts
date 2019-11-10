import { TestBed } from '@angular/core/testing';

import { SignServiceService } from './sign-service.service';

describe('SignServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SignServiceService = TestBed.get(SignServiceService);
    expect(service).toBeTruthy();
  });
});
