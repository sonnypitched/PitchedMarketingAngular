import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcecodesComponent } from './sourcecodes.component';

describe('SourcecodesComponent', () => {
  let component: SourcecodesComponent;
  let fixture: ComponentFixture<SourcecodesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcecodesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcecodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
