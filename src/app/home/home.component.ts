import { Component } from '@angular/core';
import { NavigationComponent } from "./navigation/navigation.component";
import { CommonModule } from '@angular/common';
import { SlotCountdownComponent } from './slot-countdown/slot-countdown.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrdersPerMinComponent } from './orders-per-min/orders-per-min.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, NavigationComponent, UserProfileComponent, SlotCountdownComponent, OrdersPerMinComponent]
})
export class HomeComponent { }
