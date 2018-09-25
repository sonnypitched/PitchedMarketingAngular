import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { EmailTemplateModel } from '../models/emailtemplate.model';


@Injectable()
export class EmailtemplatesService {

  private listUrl = 'https://jsonplaceholder.typicode.com/users/';
  private recordUrl = 'https://jsonplaceholder.typicode.com/users/';
  private slowly = 'http://slowwly.robertomurray.co.uk/delay/1000/url/'; //simulate delayed response

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }

  getList(): Observable<EmailTemplateModel[]> {
    return this.http.get<EmailTemplateModel[]>(this.slowly + this.listUrl);
  }

  getRecord(recordId: number): Observable<EmailTemplateModel> {
    return this.http.get<EmailTemplateModel>(this.slowly + this.recordUrl + recordId);

  }
}
