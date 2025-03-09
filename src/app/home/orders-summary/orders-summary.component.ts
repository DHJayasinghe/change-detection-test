import { DecimalPipe } from '@angular/common';
import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { IOrder, MockOrdersService } from '../../services/mock-orders.service';

@Component({
  selector: 'orders-summary',
  templateUrl: './orders-summary.component.html',
  styleUrls: ['./orders-summary.component.scss'],
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
    let qty = this.orders.reduce((sum, order) => sum + order.qty, 0);
    return this.formatLargeNumber(qty);
  }

  // CPU intensive calculation
  calculateTotalPerMin() {
    let total = this.orders.reduce((sum, order) => sum + order.totalPrice, 0);
    return this.formatLargeNumber(total);
  }

  private formatLargeNumber(value: number): string {
    if (value >= 1_000_000) {
      return this.decimalPipe.transform(value / 1_000_000, '1.2-2') + ' M'; // Millions
    } else if (value >= 1_000) {
      return this.decimalPipe.transform(value / 1_000, '1.2-2') + ' K'; // Thousands
    }
    return this.decimalPipe.transform(value, '1.0-2') || ''; // Normal formatting
  }
}