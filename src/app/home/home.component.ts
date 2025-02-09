import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Component1Component } from "./component1/component1.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, Component1Component],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('HomeComponent OnInit');
  }
}
