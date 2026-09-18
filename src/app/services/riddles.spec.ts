import { TestBed } from '@angular/core/testing';

import { Riddles } from './riddles';

describe('Riddles', () => {
  let service: Riddles;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Riddles);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
