import { Component, OnInit, ViewChild } from '@angular/core';
import { EmailtemplatesService } from '../services/emailtemplates.service';
import { ToastrService } from 'ngx-toastr';

import {
  MatButton, MatPaginator, MatTableDataSource
} from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-emailtemplates',
  templateUrl: './emailtemplates.component.html',
  styleUrls: ['./emailtemplates.component.css']
})


export class EmailtemplatesComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['position', 'templateName', 'createdBy', 'subject','action'];  
  dataSource = new MatTableDataSource();
  isLoading: boolean = false;

  constructor(
    private service: EmailtemplatesService,
    private router: Router,
    private toastr: ToastrService) { }

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
        this.showToast();
      }

    );

  }

  private viewRecord(id) {
    this.router.navigate(['/emailtemplates', id]);
  }

  showToast() {
    this.toastr.success('All records are up to date!', 'Success!');
  }
}



//export class UserDataSource extends DataSource<any> {
//  constructor(private pitchedService: PitchedService) {
//    super();
//  }
//  connect(): Observable<User[]> {

//    return this.pitchedService.getUsers();
//  }
//  disconnect() { }
//}


