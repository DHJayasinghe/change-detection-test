import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavigationComponent } from "./navigation/navigation.component";
import { CommonModule } from '@angular/common';
import { SlotCountdownComponent } from './slot-countdown/slot-countdown.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { OrdersPerMinComponent } from './orders-per-min/orders-per-min.component';
import { MatButtonModule } from '@angular/material/button';
import { AddNewAccountComponent } from './add-new-account/add-new-account.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, MatSidenavModule, MatButtonModule, AddNewAccountComponent, NavigationComponent, UserProfileComponent, SlotCountdownComponent, OrdersPerMinComponent]
})
export class HomeComponent {
  newAccount: string = "";

  whenNewAccountAdded(name: string) {
    this.newAccount = name;
  }
}
