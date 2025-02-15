import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockOrdersService {
  private orders: IOrder[] = [];

  constructor() {
    this.generateInitialOrders();
    this.simulateReceivingDataFromWebSocket();
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
    // Simulate Websocket message receival
    setInterval(() => {
      var newOrder = this.generateRandomOrder();
      this.$newOrders.next(newOrder);
      this.orders.push(newOrder);
    }, 100);
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
