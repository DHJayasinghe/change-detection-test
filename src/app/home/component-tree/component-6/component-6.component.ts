import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-6',
  templateUrl: './component-6.component.html',
  imports: [CommonModule]
})
export class Component6 {
  backgroundColor: string = '#ADD8E6'; // Light Blue color

  onClick() {
    this.backgroundColor = this.getRandomColor();
  }

  private getRandomColor(): string {
    return `hsl(${Math.random() * 360}, 60%, 80%)`; // Pastel colors
  }
}
