import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subscriber } from './subscriber';
import 'rxjs/add/operator/map';

@Injectable()
export class SubscriptionDataService {

  constructor(private http: Http) {}
  getSubscriptions(){
    // This hardcoded string needs to be moved.
    return this.http.get('http://localhost:3000/members').map(response => <Subscriber[]>response.json());
  }
}
