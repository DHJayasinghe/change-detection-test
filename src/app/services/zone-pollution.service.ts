import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZonePollutionService {
  $subject = new BehaviorSubject<number>(0);

  constructor(private ngZone: NgZone) {
    console.log('initiated');
    this.ngZone.runOutsideAngular(_ => {
      setInterval(() => { this.$subject.next(new Date().getTime()); }, 3000)
    });
  }
}
