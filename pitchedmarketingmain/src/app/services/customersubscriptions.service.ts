import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of ,from} from 'rxjs';
import { delay } from 'rxjs/operators';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CustomerSubscriptionModel } from '../models/customersubscription.model';



@Injectable()
export class CustomersubscriptionsService {

  private listUrl = 'https://jsonplaceholder.typicode.com/posts/';
  private recordUrl = 'https://jsonplaceholder.typicode.com/posts/';
  private postUrl = 'https://jsonplaceholder.typicode.com/posts/';
  private slowly = 'http://slowwly.robertomurray.co.uk/delay/1000/url/'; //simulate delayed response

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }

  getList(): Observable<CustomerSubscriptionModel[]> {
    return this.http.get<CustomerSubscriptionModel[]>(this.slowly + this.listUrl);        
  }

  getRecord(recordId: number): Observable<CustomerSubscriptionModel> {
    return this.http.get<CustomerSubscriptionModel>(this.slowly+this.recordUrl+recordId);
    
  }

  createRecord(model: CustomerSubscriptionModel): Observable<CustomerSubscriptionModel> {
    return this.http.post<CustomerSubscriptionModel>(this.postUrl,model);
  }
}
