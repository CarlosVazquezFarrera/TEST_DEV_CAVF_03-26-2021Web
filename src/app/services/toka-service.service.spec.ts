import { TestBed } from '@angular/core/testing';

import { TokaServiceService } from './toka-service.service';

describe('TokaServiceService', () => {
  let service: TokaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
