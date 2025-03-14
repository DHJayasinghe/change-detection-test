import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DataSharingService } from '../../services/data-sharing.service';
import { MockUsersService } from '../../services/mock-users.service';
import { Component1 } from './component-1/component-1.component';
import { Component2 } from './component-2/component-2.component';

@Component({
  selector: 'app-component-tree',
  templateUrl: './component-tree.component.html',
  styleUrls: ['./component-tree.component.css'],
  imports: [Component1, Component2,CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTreeComponent {
  backgroundColor: string = '#ADD8E6'; // Light Blue color
  sequence: number = 0;

  constructor(private dataShare: DataSharingService, private userService: MockUsersService){}

  onClick() {
    this.sequence = Math.floor(Math.random()*100);
    this.backgroundColor = this.getRandomColor();
    this.dataShare.notify(this.sequence);
    // this.userService.getData().subscribe(d=>{

    // });
  }

  private getRandomColor(): string {
    return `hsl(${Math.random() * 360}, 60%, 80%)`; // Pastel colors
  }
}
