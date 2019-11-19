import { TestBed } from '@angular/core/testing';

import { MainLoadingBarService } from './main-loading-bar.service';

describe('MainLoadingBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainLoadingBarService = TestBed.get(MainLoadingBarService);
    expect(service).toBeTruthy();
  });
});
