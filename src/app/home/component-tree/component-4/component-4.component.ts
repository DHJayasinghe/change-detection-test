import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-component-4',
  templateUrl: './component-4.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Component4 implements AfterViewInit {
  @ViewChild("btn") btnEl: ElementRef<HTMLButtonElement> | undefined;
  backgroundColor = signal('#ADD8E6'); // Light Blue color

  onClick() {
    this.backgroundColor.set(this.getRandomColor());
  }

  private getRandomColor(): string {
    return `hsl(${Math.random() * 360}, 60%, 80%)`; // Pastel colors
  }

  ngAfterViewInit() {
    this.btnEl?.nativeElement.addEventListener("click", () => {
      console.log("onClick");
      this.onClick();
    });
  }
}
