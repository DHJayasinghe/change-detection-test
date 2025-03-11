import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Component1 } from './component-1/component-1.component';
import { Component2 } from './component-2/component-2.component';

@Component({
  selector: 'app-component-tree',
  templateUrl: './component-tree.component.html',
  styleUrls: ['./component-tree.component.css'],
  imports: [Component1, Component2,CommonModule]
})
export class ComponentTreeComponent {
  backgroundColor: string = '#ADD8E6'; // Light Blue color

  onClick() {
    this.backgroundColor = this.getRandomColor();
  }

  private getRandomColor(): string {
    return `hsl(${Math.random() * 360}, 60%, 80%)`; // Pastel colors
  }
}
