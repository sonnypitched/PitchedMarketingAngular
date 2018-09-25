import { Component, OnInit } from '@angular/core';
import { EmailtemplatesService } from '../../services/emailtemplates.service';
import { ActivatedRoute } from '@angular/router';
import { EmailTemplateModel } from '../../models/emailtemplate.model';;

import { Router } from "@angular/router";

@Component({
  selector: 'app-emailtemplates-detail',
  templateUrl: './emailtemplates-detail.component.html',
  styleUrls: ['./emailtemplates-detail.component.css']
})
export class EmailtemplatesDetailComponent implements OnInit {

  id: number;
  isLoading: boolean = false;
  private sub: any;

  model: EmailTemplateModel;

  constructor(
    private service: EmailtemplatesService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      this.getRecord(this.id);
    });
  }

  getRecord(id) {

    this.isLoading = false;

    this.service.getRecord(id).subscribe(
      data => {
        this.model = data;
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
}
