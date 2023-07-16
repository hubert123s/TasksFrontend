import { TestBed } from '@angular/core/testing';

import { RateListServiceService } from './rate-list-service.service';

describe('RateListServiceService', () => {
  let service: RateListServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RateListServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
