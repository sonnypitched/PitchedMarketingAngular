import { TestBed, inject } from '@angular/core/testing';

import { SourcecodeserviceService } from './sourcecodeservice.service';

describe('SourcecodeserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SourcecodeserviceService]
    });
  });

  it('should be created', inject([SourcecodeserviceService], (service: SourcecodeserviceService) => {
    expect(service).toBeTruthy();
  }));
});
