import { TestBed, inject } from '@angular/core/testing';

import { SegmentbuilderService } from './segmentbuilder.service';

describe('SegmentbuilderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SegmentbuilderService]
    });
  });

  it('should be created', inject([SegmentbuilderService], (service: SegmentbuilderService) => {
    expect(service).toBeTruthy();
  }));
});
