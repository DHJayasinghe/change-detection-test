import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-component-3',
  templateUrl: './component-3.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component3 {
  backgroundColor: string = '#ADD8E6'; // Light Blue color

  onClick() {
    this.backgroundColor = this.getRandomColor();
  }

  private getRandomColor(): string {
    return `hsl(${Math.random() * 360}, 60%, 80%)`; // Pastel colors
  }
}
