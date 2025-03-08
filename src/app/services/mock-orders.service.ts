import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockOrdersService {
  private orders: IOrder[] = [];

  constructor(private ngZone: NgZone) {
    this.ngZone.runOutsideAngular(_ => {
      this.generateInitialOrders();
      this.simulateReceivingDataFromWebSocket();
    });
  }

  $newOrders: Subject<IOrder> = new Subject<IOrder>();
  getData() {
    return of(this.orders);
  }

  private generateInitialOrders() {
    // Generate an initial 10,000,000 orders
    for (let i = 0; i < 10000000; i++) {
      this.orders.push(this.generateRandomOrder());
    }
  }
  
  private simulateReceivingDataFromWebSocket() {
    const generateOrder = () => {
      var newOrder = this.generateRandomOrder();
      this.$newOrders.next(newOrder);
      this.orders.push(newOrder);

      // Generate a new order after a random interval
      const nextInterval = this.getRandomInterval();
      setTimeout(generateOrder, nextInterval);
    };

    generateOrder(); // Start the first order generation
  }

  private getRandomInterval(): number {
    return Math.floor(Math.random() * (5000 - 500 + 1)) + 500; // Random interval between 500ms to 5000ms
  }


  private generateRandomOrder(): IOrder {
    return {
      qty: Math.floor(Math.random() * 10) + 1, // qty between 1 and 10
      totalPrice: parseFloat((Math.random() * 1000).toFixed(2)) // price between 0 and 1000
    };
  }

}

export interface IOrder {
  qty: number,
  totalPrice: number
}
