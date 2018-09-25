import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcecodesdetailComponent } from './sourcecodesdetail.component';

describe('SourcecodesdetailComponent', () => {
  let component: SourcecodesdetailComponent;
  let fixture: ComponentFixture<SourcecodesdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcecodesdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcecodesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
