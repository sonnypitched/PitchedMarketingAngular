import { TestBed, inject } from '@angular/core/testing';

import { EmailschedulesService } from './emailschedules.service';

describe('EmailschedulesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailschedulesService]
    });
  });

  it('should be created', inject([EmailschedulesService], (service: EmailschedulesService) => {
    expect(service).toBeTruthy();
  }));
});
