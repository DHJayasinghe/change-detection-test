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
      // this.simulateReceivingDataFromWebSocket();
    });
  }

  $newOrders: Subject<IOrder> = new Subject<IOrder>();
  getData() {
    return of(this.orders);
  }

  private generateInitialOrders() {
    // Generate an initial 100,000 orders
    for (let i = 0; i < 100000; i++) {
      this.orders.push(this.generateRandomOrder(true));
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


  private generateRandomOrder(productIdBelow10 = false): IOrder {
    return {
      productId: productIdBelow10 ? Math.floor(Math.random() * 10) + 1 : Math.floor(Math.random() * (10000 - 10 + 1)) + 10, // productId between 1 and 10 || productId between 10-10000
      qty: Math.floor(Math.random() * 10) + 1, // qty between 1 and 10
      totalPrice: parseFloat((Math.random() * 1000).toFixed(2)) // price between 0 and 1000
    };
  }

  public calculateOrderCount(productId: number) {
    return this.orders.reduce((sum, order) => sum + (order.productId == productId ? order.qty : 0), 0);
  }

}

export interface IOrder {
  productId: number,
  qty: number,
  totalPrice: number
}
