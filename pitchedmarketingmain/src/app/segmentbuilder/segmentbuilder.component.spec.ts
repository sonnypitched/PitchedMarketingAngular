import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentbuilderComponent } from './segmentbuilder.component';

describe('SegmentbuilderComponent', () => {
  let component: SegmentbuilderComponent;
  let fixture: ComponentFixture<SegmentbuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentbuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
