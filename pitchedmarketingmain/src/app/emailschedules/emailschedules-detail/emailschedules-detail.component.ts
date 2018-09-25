import { Component, OnInit } from '@angular/core';
import { EmailschedulesService } from '../../services/emailschedules.service';
import { EmailtemplatesService } from '../../services/emailtemplates.service';
import { ActivatedRoute } from '@angular/router';
import { EmailScheduleModel } from '../../models/emailschedule.model';
import { EmailTemplateModel } from '../../models/emailtemplate.model';

import {
  MatFormField, MatSelect, MatInput, MatDatepicker
} from '@angular/material';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-emailschedules-detail',
  templateUrl: './emailschedules-detail.component.html',
  styleUrls: ['./emailschedules-detail.component.css']
})
export class EmailschedulesDetailComponent implements OnInit {

  id: number;
  isLoading: boolean = false;
  private sub: any;
  scheduleForm: FormGroup;
  model: EmailScheduleModel;
  public templates: EmailTemplateModel[]; //used to populate dropdown

  constructor(
    private service: EmailschedulesService,
    private emailTemplateService: EmailtemplatesService,
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

    this.scheduleForm = this.formBuilder.group({
      taskName: [ '', Validators.required],
      interval: ['', Validators.required],
      startDate: ['', Validators.nullValidator],
      endDate: ['', Validators.nullValidator],
      emailTemplate: ['', Validators.nullValidator],
      queryTemplate : ['',Validators.nullValidator]
    });

    //fill email template list
    this.emailTemplateService.getList().subscribe(
      data => {
        this.templates = data;        
      },
      err => {
        console.log(err);
      },
      () => {       
      }
    );
  }


  getRecord(id) {

    this.isLoading = false;

    this.service.getRecord(id).subscribe(
      data => {
        //this.model = data;
        this.scheduleForm.controls["taskName"].setValue(data.taskName);
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

    if (this.scheduleForm.invalid) {
      console.log('invalid');
      return;
    } else {

      
      this.model = ({
        id: this.id,
        taskName: this.scheduleForm.controls["taskName"].value,
        startDate: this.scheduleForm.controls["startDate"].value,
        endDate: this.scheduleForm.controls["endDate"].value,
        interval: this.scheduleForm.controls["interval"].value,
        emailTemplateID: this.scheduleForm.controls["emailTemplate"].value,
        queryBuilderID: 0 //this.scheduleForm.controls["queryBuilder"].value
      });

      //console.log(this.model);

      if (this.id == 0) {
        this.service.createRecord(this.model).subscribe(
          data => {
            console.log(data.id);
            this.toastr.success("Task was saved.", "Success!");
          },
          err => {
            console.log(err);
            this.toastr.error("Task was not saved.", "Error!");
          },
          () => {
            //on completion
            this.isLoading = true;
          }

        );
      } else {
        //update Record here
      }
    }
      
     
  }

  }



