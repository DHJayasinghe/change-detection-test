import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Component5 } from '../component-5/component-5.component';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  imports: [Component5, CommonModule]
})
export class Component1 {
  backgroundColor: string = '#ADD8E6'; // Light Blue color
  
  onClick(){
    this.backgroundColor = this.getRandomColor();
  }

  private getRandomColor(): string {
    return `hsl(${Math.random() * 360}, 60%, 80%)`; // Pastel colors
  }
}
