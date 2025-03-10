import { Component } from '@angular/core';
import { NavigationComponent } from "./navigation/navigation.component";
import { CommonModule } from '@angular/common';
import { SlotCountdownComponent } from './slot-countdown/slot-countdown.component';
import { UserProfileComponent } from './user-accounts/user-accounts.component';
import { OrderSummaryComponent } from './orders-summary/orders-summary.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    CommonModule,
    NavigationComponent,
    UserProfileComponent,
    SlotCountdownComponent,
    OrderSummaryComponent,
    ProductsComponent
  ]
})
export class HomeComponent { }
