import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { IOrder, MockOrdersService } from '../../services/mock-orders.service';

@Component({
  selector: 'orders-per-min',
  templateUrl: './orders-per-min.component.html',
  styleUrls: ['./orders-per-min.component.scss'],
  providers: [DecimalPipe]
})
export class OrdersPerMinComponent implements OnInit {
  orders: IOrder[] = [];

  constructor(private orderService: MockOrdersService, private decimalPipe: DecimalPipe, private ngZone: NgZone, private cdr: ChangeDetectorRef) {
    // this.cdr.detach();
  }

  ngOnInit() {
    this.ngZone.runOutsideAngular(d => {
      this.orderService.getData().subscribe(orders => {
        this.orders = orders;
      });
      this.orderService.$newOrders.subscribe(newOrder => {
        this.orders.push(newOrder);
        this.cdr.detectChanges();
      });
    });
  }

  // CPU intensive calculation
  calculateQtyPerMin() {
    let qty = 0;
    for (let i = 0; i < this.orders.length; i++) {
      qty += this.orders[i].qty;
    }
    return this.decimalPipe.transform(qty, '1.0-2') || '';
  }

  // CPU intensive calculation
  calculateTotalPerMin() {
    let sum = 0;
    for (let i = 0; i < this.orders.length; i++) {
      sum += this.orders[i].totalPrice;
    }
    return this.decimalPipe.transform(sum, '1.2-2') || '';
  }
}