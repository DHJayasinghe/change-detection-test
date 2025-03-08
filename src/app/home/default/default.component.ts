import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ZonePollution1Component } from '../zone-pollution1/zone-pollution1.component';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css'],
  imports: [CommonModule, ZonePollution1Component]
})
export class DefaultComponent implements OnInit {
  showZonePollution = false;
  constructor() { }

  ngOnInit() {
  }

}
