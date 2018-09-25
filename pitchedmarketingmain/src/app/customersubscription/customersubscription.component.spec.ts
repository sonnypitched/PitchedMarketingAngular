import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersubscriptionComponent } from './customersubscription.component';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatFormField, MatSelect, MatInput
} from '@angular/material';

describe('CustomersubscriptionComponent', () => {
  let component: CustomersubscriptionComponent;
  let fixture: ComponentFixture<CustomersubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormBuilder],
      declarations: [ CustomersubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
