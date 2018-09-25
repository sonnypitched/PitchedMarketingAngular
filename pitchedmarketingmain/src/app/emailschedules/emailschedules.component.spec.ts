import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailschedulesComponent } from './emailschedules.component';

describe('EmailschedulesComponent', () => {
  let component: EmailschedulesComponent;
  let fixture: ComponentFixture<EmailschedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailschedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailschedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
