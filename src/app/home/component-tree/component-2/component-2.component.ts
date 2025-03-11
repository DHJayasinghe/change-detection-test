import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Component3 } from '../component-3/component-3.component';
import { Component4 } from '../component-4/component-4.component';

@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
  imports: [Component3, Component4, CommonModule]
})
export class Component2 {
  backgroundColor: string = '#ADD8E6'; // Light Blue color

  onClick() {
    this.backgroundColor = this.getRandomColor();
  }

  private getRandomColor(): string {
    return `hsl(${Math.random() * 360}, 60%, 80%)`; // Pastel colors
  }
}
