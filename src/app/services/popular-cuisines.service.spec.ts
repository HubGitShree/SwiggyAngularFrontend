import { TestBed } from '@angular/core/testing';

import { PopularCuisinesService } from './popular-cuisines.service';

describe('PopularCuisinesService', () => {
  let service: PopularCuisinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularCuisinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
