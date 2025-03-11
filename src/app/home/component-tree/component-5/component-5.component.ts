import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Component6 } from '../component-6/component-6.component';

@Component({
  selector: 'app-component-5',
  templateUrl: './component-5.component.html',
  imports: [Component6,CommonModule]
})
export class Component5 {
  backgroundColor: string = '#ADD8E6'; // Light Blue color

  onClick() {
    this.backgroundColor = this.getRandomColor();
  }

  private getRandomColor(): string {
    return `hsl(${Math.random() * 360}, 60%, 80%)`; // Pastel colors
  }
}
