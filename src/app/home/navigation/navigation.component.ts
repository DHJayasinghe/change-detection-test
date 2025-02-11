import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'header-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
  imports: [ CommonModule, MatButtonModule, MatMenuModule]
})
export class NavigationComponent implements OnInit {
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
