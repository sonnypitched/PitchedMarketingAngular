import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailschedulesDetailComponent } from './emailschedules-detail.component';

describe('EmailschedulesDetailComponent', () => {
  let component: EmailschedulesDetailComponent;
  let fixture: ComponentFixture<EmailschedulesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailschedulesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailschedulesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
