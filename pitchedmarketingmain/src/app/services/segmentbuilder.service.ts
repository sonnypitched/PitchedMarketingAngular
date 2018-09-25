import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of, from } from 'rxjs';
import { delay } from 'rxjs/operators';

import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SegmentModel } from '../models/segment.model';
import { SegmentDetailModel } from '../models/segment.model';


@Injectable()
export class SegmentbuilderService {
  private listUrl = 'https://jsonplaceholder.typicode.com/posts/';
  private recordUrl = 'https://jsonplaceholder.typicode.com/posts/';
  private postUrl = 'https://jsonplaceholder.typicode.com/posts/';
  private slowly = 'http://slowwly.robertomurray.co.uk/delay/1000/url/'; //simulate delayed response

  constructor(private http: HttpClient, public sanitizer: DomSanitizer) { }

  getList(): Observable<SegmentModel[]> {
    return this.http.get<SegmentModel[]>( this.listUrl);
  }

  getRecord(recordId: number): Observable<SegmentModel> {
    return this.http.get<SegmentModel>( this.recordUrl + recordId);

  }

  getDetailsList(recordId: number): Observable<SegmentDetailModel[]> {
    return this.http.get<SegmentDetailModel[]>( this.listUrl );

  }

  
}

