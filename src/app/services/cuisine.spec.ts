import { TestBed } from '@angular/core/testing';

import { Cuisine } from './cuisine';

describe('Cuisine', () => {
  let service: Cuisine;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cuisine);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
