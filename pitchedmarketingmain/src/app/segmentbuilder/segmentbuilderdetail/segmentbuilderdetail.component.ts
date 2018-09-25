import { Component, OnInit } from '@angular/core';
import { SegmentbuilderService } from '../../services/segmentbuilder.service';

import { ActivatedRoute } from '@angular/router';
import { SegmentModel } from '../../models/segment.model';
import { SegmentDetailModel } from '../../models/segment.model';

import {
  MatFormField, MatSelect, MatInput, MatDatepicker
} from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormControl, FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

//for dropdown purpose only
export interface Conditions {
  value: string;
  viewValue: string;
}
export interface Fields {
  value: string;
  viewValue: string;
}

export const SEGMENTS: SegmentDetailModel[] = [
  { id: 1, segmentid: 1, fieldname: 'Arrival', operator: 'Is', conditionvalue1: '1', conditionvalue2: 'Test Value1' },
  {
    id: 2, segmentid : 1,
    fieldname: 'Arrival', operator: 'Is Not', conditionvalue1: '2', conditionvalue2: 'Test Value2'
  },
  { id: 3, segmentid: 1, fieldname: 'Postcode', operator: 'Contains', conditionvalue1: '3', conditionvalue2: 'Test Value3' },
  { id: 4, segmentid: 1, fieldname: 'Booking Status', operator: 'Not Contains', conditionvalue1: '4', conditionvalue2: 'Test Value4' }
];

@Component({
  selector: 'app-segmentbuilderdetail',
  templateUrl: './segmentbuilderdetail.component.html',
  styleUrls: ['./segmentbuilderdetail.component.css']
})
export class SegmentbuilderdetailComponent implements OnInit {
  
  id: number;
  isLoading: boolean = false;
  private sub: any;
  segmentForm: FormGroup;
  model: SegmentModel
  modelDetail: SegmentDetailModel;
  items: FormArray;
  saveButton: boolean;

  //test only
  segments = SEGMENTS;

  //for dropdown purpose only
  conditions: Conditions[] = [
    { value: 'Is', viewValue: 'Is' },
    { value: 'Is Not', viewValue: 'Is Not' },
    { value: 'Contains', viewValue: 'Contains' },
    { value: 'Not Contains', viewValue: 'Not Contains' },
     { value: 'Greater Than', viewValue: 'Greater Than' },
      { value: 'Less Than', viewValue: 'Less Than' },
    { value: 'Starts With', viewValue: 'Starts With' },
    { value: 'Ends With', viewValue: 'Ends With' }
  ];

  fields: Fields[] = [
    { value: 'Arrival', viewValue: 'Arrival' },
    { value: 'Unit Type Name', viewValue: 'Unit Type Name' },
    { value: 'Booking Status', viewValue: 'Booking Status' },
    { value: 'Postcode', viewValue: 'Postcode' }
  ];

  constructor(
    private service: SegmentbuilderService,    
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private toastr: ToastrService) {

  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      if (this.id > 0)
        this.getRecord(this.id);
      else
        this.isLoading = true;

    });

    this.segmentForm = this.formBuilder.group({
      segmentname: ['', Validators.required],      
      items: this.formBuilder.array([])//this will be the array of form controls
    });

    this.saveButton = false;
    this.loadItems();
  }

  loadItems(): void {
    //getting the values from mock up segment details
    for (let segment of this.segments) {
      this.items = (<FormArray>this.segmentForm.get('items'));//casting items as form array
      this.items.push(this.formBuilder.group(segment));
    }
    this.isItemEmpty();
  }

  getRecord(id) {

    this.isLoading = false;

    this.service.getRecord(id).subscribe(
      data => {
        //this.model = data;
        this.segmentForm.controls["segmentName"].setValue(data.segmentname);
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

  createItem(): FormGroup {
    return this.formBuilder.group({
      //FormGroup properties the same with model
      fieldname: '',
      operator: '',
      conditionvalue1: '',
      conditionvalue2: ''
    });
  }

  addItem(): void {
    this.items = (<FormArray>this.segmentForm.get('items'));//casting items as form array
    this.items.push(this.createItem());
    //show save button
    this.saveButton = true;
  }

  removeItem(index): void {
    this.items = (<FormArray>this.segmentForm.get('items'));
    this.items.removeAt(index);//passing the index to be remove from items
    this.isItemEmpty();//checking if the items are already empty to unshow save button
  }


  isItemEmpty(): void {

    if (this.items.length == 0) {
      this.saveButton = false;
    }

  }

  saveItem(): void {
    //for viewing the values of item into json
    this.modelDetail = this.segmentForm.value; //binding the html values to the model
    console.log(JSON.stringify(this.modelDetail));//for checking the values in json format


    // SEGMENT OBJECT IS READY TO BE PASSED TO THE SERVICE
  }
}
