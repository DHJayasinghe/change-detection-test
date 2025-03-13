import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { DataSharingService } from '../../../services/data-sharing.service';

@Component({
  selector: 'app-component-6',
  templateUrl: './component-6.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component6 {
  backgroundColor: string = '#ADD8E6'; // Light Blue color
  sequence: number = 0;
  // sequence = signal(0);

  constructor(public dataShare: DataSharingService) {
    this.dataShare.$subject.subscribe(sequence => {
      console.log("New sequence received "+ sequence);
      this.sequence = sequence;
      // this.sequence.set(sequence);
    });
  }

  onClick() {
    this.backgroundColor = this.getRandomColor();
  }

  private getRandomColor(): string {
    return `hsl(${Math.random() * 360}, 60%, 80%)`; // Pastel colors
  }
}
