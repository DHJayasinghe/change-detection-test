import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { DataSharingService } from '../../services/data-sharing.service';
import { MockUsersService } from '../../services/mock-users.service';
import { Component1 } from './component-1/component-1.component';
import { Component2 } from './component-2/component-2.component';

@Component({
  selector: 'app-component-tree',
  templateUrl: './component-tree.component.html',
  styleUrls: ['./component-tree.component.css'],
  imports: [Component1, Component2, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ComponentTreeComponent implements AfterViewInit {
  @ViewChild("btn") btnEl: ElementRef<HTMLButtonElement> | undefined;
  backgroundColor = signal('#ADD8E6'); // Light Blue color
  sequence = signal(0);

  constructor(private dataShare: DataSharingService, private userService: MockUsersService) {
    // setInterval(() => {
    //   console.log('Interval calling');
    // }, 1000);
  }

  ngAfterViewInit() {
    this.btnEl?.nativeElement.addEventListener("click", () => {
      console.log("onClick");
      this.onClick();
    });
  }

  onClick() {
    this.sequence.set(Math.floor(Math.random() * 100));
    this.backgroundColor.set(this.getRandomColor());
    this.dataShare.notify(this.sequence());
    // this.userService.getData().subscribe(d=>{
    // });
  }

  keyup(){
    console.log('Pressing key');
  }

  private getRandomColor(): string {
    return `hsl(${Math.random() * 360}, 60%, 80%)`; // Pastel colors
  }
}
