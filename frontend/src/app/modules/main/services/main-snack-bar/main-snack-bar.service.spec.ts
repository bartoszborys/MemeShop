import { TestBed } from '@angular/core/testing';

import { MainSnackBarService } from './main-snack-bar.service';

describe('MainSnackBarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainSnackBarService = TestBed.get(MainSnackBarService);
    expect(service).toBeTruthy();
  });
});
