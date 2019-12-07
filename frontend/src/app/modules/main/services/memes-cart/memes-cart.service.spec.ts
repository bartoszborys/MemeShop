import { TestBed } from '@angular/core/testing';

import { MemesCartService } from './memes-cart.service';

describe('MemesCartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MemesCartService = TestBed.get(MemesCartService);
    expect(service).toBeTruthy();
  });
});
