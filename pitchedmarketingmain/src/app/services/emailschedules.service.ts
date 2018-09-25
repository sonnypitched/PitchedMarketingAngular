import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';
import { delay } from 'rxjs/operators';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EmailScheduleModel } from '../models/emailschedule.model';

@Injectable({
  providedIn: 'root'
})
export class EmailschedulesService {

  private listUrl = 'https://jsonplaceholder.typicode.com/posts/';
  private recordUrl = 'https://jsonplaceholder.typicode.com/posts/';
  private postUrl = 'https://jsonplaceholder.typicode.com/posts/';
  private slowly = 'http://slowwly.robertomurray.co.uk/delay/1000/url/'; //simulate delayed response

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }

  getList(): Observable<EmailScheduleModel[]> {
    return this.http.get<EmailScheduleModel[]>(this.slowly + this.listUrl);
  }

  getRecord(recordId: number): Observable<EmailScheduleModel> {
    return this.http.get<EmailScheduleModel>(this.slowly + this.recordUrl + recordId);

  }

  createRecord(model: EmailScheduleModel): Observable<EmailScheduleModel> {
    return this.http.post<EmailScheduleModel>(this.postUrl, model);
  }
}
