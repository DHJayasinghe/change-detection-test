import { Component, OnInit } from '@angular/core';
import { UserProfileComponent } from "../user-profile/user-profile.component";
import { CommonModule } from '@angular/common';
import { NextSlotCountdownComponent } from '../next-slot-countdown/next-slot-countdown.component';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  imports: [UserProfileComponent, CommonModule, NextSlotCountdownComponent]
})
export class Component1Component implements OnInit {
  someVariable: number = 0;
  constructor() { }

  ngOnInit() {
    console.log('Component1Component OnInit');
  }

  logChangeDetection() {
    console.log('Component1Component template evaluated');
    return true;
  }

  clickMe() {
    this.someVariable = new Date().getSeconds();
   }

  print(value: any) {
    console.log(value);
  }

}
