import { Component } from '@angular/core';
import { SubscriptionDataService } from './subscription-data-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Subscriber Info';
  subscriberInfo = [];

  constructor(private subscriptionDataService: SubscriptionDataService) {}

  ngOnInit(){
    this.subscriptionDataService.getSubscriptions()
      .subscribe(subscriberInfo => this.subscriberInfo = subscriberInfo);
  }
}
