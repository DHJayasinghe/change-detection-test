import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IOrder, MockOrdersService } from '../../services/mock-orders.service';

@Component({
  selector: 'orders-per-min',
  templateUrl: './orders-per-min.component.html',
  styleUrls: ['./orders-per-min.component.scss'],
  providers: [DecimalPipe]
})
export class OrdersPerMinComponent implements OnInit {
  private orders: IOrder[] = [];
  qtyPerMin: string = "0";
  totalPerMin: string = "0";

  constructor(private orderService: MockOrdersService, private decimalPipe: DecimalPipe) { }

  ngOnInit() {
    this.orderService.getData().subscribe(orders => {
      this.orders = orders;
      this.calculateQtyAndTotalPerMin();
    });
    this.orderService.$newOrders.subscribe(newOrder => {
      this.orders.push(newOrder);
    });
    setInterval(() => {
      // instead calculate summary per every message, calculate every 1 sec
      this.calculateQtyAndTotalPerMin();
    }, 1000);
  }

  calculateQtyAndTotalPerMin() {
     // instead calculate show summary via a function, calculate and assign the summary to variable and reference the variable on the UI
    let qty = 0;
    let sum = 0;
    for (let i = 0; i < this.orders.length; i++) {
      qty += this.orders[i].qty;
      sum += this.orders[i].totalPrice;
    }
    this.qtyPerMin = this.decimalPipe.transform(qty, '1.0-2') || '';
    this.totalPerMin = this.decimalPipe.transform(sum, '1.2-2') || '';
  }

  calculateQtyPerMin() {
    // CPU intensive calculation
    let qty = 0;
    for (let i = 0; i < this.orders.length; i++) {
      qty += this.orders[i].qty;
    }
    return this.decimalPipe.transform(qty, '1.0-2') || '';
  }

  calculateTotalPerMin() {
    // CPU intensive calculation
    let sum = 0;
    for (let i = 0; i < this.orders.length; i++) {
      sum += this.orders[i].totalPrice;
    }
    return this.decimalPipe.transform(sum, '1.2-2') || '';
  }
}