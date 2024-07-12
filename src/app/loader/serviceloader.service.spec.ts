import { TestBed } from '@angular/core/testing';

import { ServiceloaderService } from './serviceloader.service';

describe('ServiceloaderService', () => {
  let service: ServiceloaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceloaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
