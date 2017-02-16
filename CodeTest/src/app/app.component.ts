import { Component, Input } from '@angular/core';
import { SubscriptionDataService } from './subscription-data-service';
import { Subscriber } from './subscriber';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Subscriber Info';
  subscribers: Subscriber[];

  constructor(private subscriptionDataService: SubscriptionDataService) {}

  ngOnInit(){
    this.subscriptionDataService.getSubscriptions()
      .subscribe(subscribers => this.subscribers = subscribers);
  }

  sortSubscribers(){
    this.subscribers.sort( (a: Subscriber, b: Subscriber) => (a.subscription_price - b.subscription_price) );
  }

  getAverageSubscription(){
    var total = 0;
    this.subscribers.forEach(
      subscriber => total += subscriber.subscription_price
    );
    alert(total/this.subscribers.length);
  }
}
