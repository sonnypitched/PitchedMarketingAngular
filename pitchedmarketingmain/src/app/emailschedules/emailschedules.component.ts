import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailschedulesService } from '../services/emailschedules.service';
import { Observable, of } from 'rxjs';

import { EmailScheduleModel } from '../models/emailschedule.model';
import {
  MatButton, MatPaginator, MatTableDataSource, MatProgressSpinner
} from '@angular/material';

import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-emailschedules',
  templateUrl: './emailschedules.component.html',
  styleUrls: ['./emailschedules.component.css']
})
export class EmailschedulesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['taskName','action'];  //, 'startDate','startTime','endDate','endTime','interval'

  dataSource = new MatTableDataSource();

  isLoading: boolean = false;

  constructor(
    private service: EmailschedulesService,
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
    this.router.navigate(['/emailschedules', id]);

  }

  private createRecord() {
    this.router.navigate(['/emailschedules', 0]);

  }
  private deleteRecord(id) {
    this.toastr.warning("Do you want to delete?", 'Delete?');

  }

}
