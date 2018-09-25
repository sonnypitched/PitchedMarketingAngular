import { Component, OnInit } from '@angular/core';
import { CustomersubscriptionsService } from '../../services/customersubscriptions.service';
import { ActivatedRoute } from '@angular/router';
import { CustomerSubscriptionModel } from '../../models/customersubscription.model';
import {
  MatFormField, MatSelect, MatInput
} from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {FormControl,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-customersubscription-detail',
  templateUrl: './customersubscription-detail.component.html',
  styleUrls: ['./customersubscription-detail.component.css']
})
export class CustomersubscriptionDetailComponent implements OnInit {

  id: number;
  isLoading: boolean = false;
  private sub: any;
  subscriptionForm: FormGroup;
  model: CustomerSubscriptionModel;

  constructor(
    private service: CustomersubscriptionsService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService)
  {
   
  }

 
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      
      if (this.id > 0)
        this.getRecord(this.id);
      else
        this.isLoading = true;
        
    });

    this.subscriptionForm = this.formBuilder.group({
      subscriptionName: ['', Validators.required]      
    });

  }

  getRecord(id) {

    this.isLoading = false;

    this.service.getRecord(id).subscribe(
      data => {
        //this.model = data;
        this.subscriptionForm.controls["subscriptionName"].setValue(data.title);
      },
      err => {
        console.log(err);
      },
      () => {
        //on completion
        this.isLoading = true;
      }

    );

  }

  onSubmit() {
    // stop here if form is invalid
    
    if (this.subscriptionForm.invalid) {
      console.log('invalid');
      return;
    } else {
      
      this.model = ({
        id : 0,
        subscriptionname: this.subscriptionForm.controls["subscriptionName"].value,
        title : ''
      });

      this.service.createRecord(this.model).subscribe(
        data => {
          console.log(data.id);
          this.toastr.success("Subscription was saved.", "Success!");
        },
        err => {
          console.log(err);
          this.toastr.error("Subscription was not saved.","Error!");
        },
        () => {
          //on completion
          this.isLoading = true;
        }

      );
    }

  }

}
