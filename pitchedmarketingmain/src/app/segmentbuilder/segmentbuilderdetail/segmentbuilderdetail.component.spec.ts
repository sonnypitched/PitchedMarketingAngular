import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentbuilderdetailComponent } from './segmentbuilderdetail.component';

describe('SegmentbuilderdetailComponent', () => {
  let component: SegmentbuilderdetailComponent;
  let fixture: ComponentFixture<SegmentbuilderdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentbuilderdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentbuilderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
