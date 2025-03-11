import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  imports: [CommonModule]
})
export class DefaultComponent implements OnInit {
  showZonePollution = false;
  constructor() { }

  ngOnInit() {
  }

}
