import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailtemplatesDetailComponent } from './emailtemplates-detail.component';

describe('EmailtemplatesDetailComponent', () => {
  let component: EmailtemplatesDetailComponent;
  let fixture: ComponentFixture<EmailtemplatesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailtemplatesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailtemplatesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
