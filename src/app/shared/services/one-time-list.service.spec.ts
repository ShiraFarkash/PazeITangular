import { TestBed } from '@angular/core/testing';

import { OneTimeListService } from './one-time-list.service';

describe('OneTimeListService', () => {
  let service: OneTimeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OneTimeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
