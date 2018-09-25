import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersubscriptionDetailComponent } from './customersubscription-detail.component';
import { CustomerSubscriptionModel } from '../../models/customersubscription.model';
import {
  MatFormField, MatSelect, MatInput, MatProgressSpinnerModule, MatFormFieldModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CustomersubscriptionsService } from '../../services/customersubscriptions.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ 
  {
    path: 'customersubscription',
    children: [      
      {
        path: ':id',
        component: CustomersubscriptionDetailComponent
      }
    ]
  }
];

describe('CustomersubscriptionDetailComponent', () => {
  let component: CustomersubscriptionDetailComponent;
  let fixture: ComponentFixture<CustomersubscriptionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      
      declarations: [CustomersubscriptionDetailComponent],
      imports: [RouterModule.forRoot(routes),ReactiveFormsModule, FormsModule, MatProgressSpinnerModule, MatFormFieldModule,
        HttpClientModule],
      providers : [CustomersubscriptionsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersubscriptionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
