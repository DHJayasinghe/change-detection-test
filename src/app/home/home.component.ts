import { Component, OnInit } from '@angular/core';
import { NavigationComponent } from "./navigation/navigation.component";
import { CommonModule } from '@angular/common';
import { SlotCountdownComponent } from './slot-countdown/slot-countdown.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, NavigationComponent, UserProfileComponent, SlotCountdownComponent],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('HomeComponent OnInit');
  }
}
