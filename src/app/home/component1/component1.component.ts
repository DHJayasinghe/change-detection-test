import { Component, OnInit } from '@angular/core';
import { Component2Component } from "../component2/component2.component";
import { CommonModule } from '@angular/common';
import { DataSharingService } from '../component2/data-sharing.service';
import { NextSlotCountdownComponent } from '../next-slot-countdown/next-slot-countdown.component';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  imports: [Component2Component, CommonModule, NextSlotCountdownComponent]
})
export class Component1Component implements OnInit {
  someVariable: number = 0;
  constructor(private dataShare: DataSharingService) { }

  ngOnInit() {
    console.log('Component1Component OnInit');

    // setInterval(() => {
    //   this.dataShare.$changedData.next(new Date().getSeconds());
    // }, 3000);
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
