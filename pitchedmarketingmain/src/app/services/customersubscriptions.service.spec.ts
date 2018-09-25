import { TestBed, inject } from '@angular/core/testing';

import { CustomersubscriptionsService } from './customersubscriptions.service';

describe('CustomersubscriptionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomersubscriptionsService]
    });
  });

  it('should be created', inject([CustomersubscriptionsService], (service: CustomersubscriptionsService) => {
    expect(service).toBeTruthy();
  }));
});
