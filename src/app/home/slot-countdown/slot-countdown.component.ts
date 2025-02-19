import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'slot-countdown',
  templateUrl: './slot-countdown.component.html',
  styleUrls: ['./slot-countdown.component.css']
})
export class SlotCountdownComponent implements OnInit {
  private targetTime: Date = new Date();

  private timerSubscription!: Subscription;

  hours = '00';
  minutes = '00';
  seconds = '00';

  constructor(private zone: NgZone, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.targetTime.setHours(this.targetTime.getHours() + 2);
    this.zone.runOutsideAngular(d => {
      this.startCountdown();
    });
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  startCountdown() {
    const targetDate = new Date(this.targetTime).getTime();

    this.timerSubscription = interval(1000).subscribe(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        this.hours = this.minutes = this.seconds = '00';
        this.timerSubscription.unsubscribe();
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      this.hours = this.padZero(hours);
      this.minutes = this.padZero(minutes);
      this.seconds = this.padZero(seconds);
      this.cdr.markForCheck();
    });
  }

  private padZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }
}
