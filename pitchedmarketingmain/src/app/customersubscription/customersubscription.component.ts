import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomersubscriptionsService } from '../services/customersubscriptions.service';
import { Observable, of } from 'rxjs';

import { CustomerSubscriptionModel } from '../models/customersubscription.model';
import {
  MatButton, MatPaginator, MatTableDataSource, MatProgressSpinner
} from '@angular/material';

import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-customersubscription',
  templateUrl: './customersubscription.component.html',
  styleUrls: ['./customersubscription.component.css']
})
export class CustomersubscriptionComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['subscriptionname', 'action'];

  dataSource = new MatTableDataSource();

  isLoading: boolean = false;

  constructor(
    private service: CustomersubscriptionsService,
    private router: Router,
    private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getList()
    this.dataSource.paginator = this.paginator;
  }

  public getList() {

    this.isLoading = false;

    this.service.getList().subscribe(
      data => {
        this.dataSource.data = data;
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

  private viewRecord(id) {
    this.router.navigate(['/customersubscription', id]);

  }

  private createRecord() {
    this.router.navigate(['/customersubscription', 0]);

  }
  private deleteRecord(id) {
    this.toastr.warning("Do you want to delete?", 'Delete?');

  }



}
