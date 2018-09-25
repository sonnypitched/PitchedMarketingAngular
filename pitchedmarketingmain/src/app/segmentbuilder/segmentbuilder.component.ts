import { Component, OnInit, ViewChild } from '@angular/core';
import { SegmentbuilderService } from '../services/segmentbuilder.service';
import { Observable, of } from 'rxjs';

import { SegmentModel } from '../models/segment.model';
import {
  MatButton, MatPaginator, MatTableDataSource, MatProgressSpinner
} from '@angular/material';

import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-segmentbuilder',
  templateUrl: './segmentbuilder.component.html',
  styleUrls: ['./segmentbuilder.component.css']
})
export class SegmentbuilderComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  displayedColumns: string[] = ['segmentname', 'recordcount','action'];

  dataSource = new MatTableDataSource();

  isLoading: boolean = false;

  constructor(
    private service: SegmentbuilderService,
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
    this.router.navigate(['/segmentbuilder', id]);

  }

  private createRecord() {
    this.router.navigate(['/segmentbuilder', 0]);

  }
  private deleteRecord(id) {
    this.toastr.warning("Do you want to delete?", 'Delete?');

  }



}
