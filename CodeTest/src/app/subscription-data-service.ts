import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SubscriptionDataService {

  constructor(private http: Http) {}
  getSubscriptions(){
    return this.http.get('http://localhost:3000/members').map(response => response.json());
  }
}
