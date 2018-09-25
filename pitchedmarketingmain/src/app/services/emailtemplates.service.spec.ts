import { TestBed, inject } from '@angular/core/testing';

import { EmailtemplatesService } from './emailtemplates.service';

describe('EmailtemplatesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailtemplatesService]
    });
  });

  it('should be created', inject([EmailtemplatesService], (service: EmailtemplatesService) => {
    expect(service).toBeTruthy();
  }));
});
