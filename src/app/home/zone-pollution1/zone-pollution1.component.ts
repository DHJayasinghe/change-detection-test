import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, NgZone, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MockUsersService } from '../../services/mock-users.service';
import { ZonePollutionService } from '../../services/zone-pollution.service';

@Component({
  selector: 'app-zone-pollution1',
  templateUrl: './zone-pollution1.component.html',
  styleUrls: ['./zone-pollution1.component.css'],
  imports: [CommonModule]
})
export class ZonePollution1Component implements OnInit, AfterViewInit {
  // data$: Observable<number>;
  data: number = 0;

  constructor(private zonePollutionService: ZonePollutionService, private ngZone: NgZone, private el: ElementRef) {
    // this.data$ = this.zonePollutionService.$subject.asObservable();
  }

  ngOnInit() {
    // this.zonePollutionService.$subject.subscribe(d => {
    //   this.data = d;
    //   console.log(d);
    // });
  }

  onMouseMove(event: MouseEvent) {
    this.ngZone.runOutsideAngular(() => {
      console.log(`Mouse moved: ${event.clientX}, ${event.clientY}`);
    });
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      const element = this.el.nativeElement;
      const listener = (event: MouseEvent) => {
        console.log(`Mouse moved: ${event.clientX}, ${event.clientY}`);
      };

      element.addEventListener('mousemove', listener);
      // this.removeListener = () => element.removeEventListener('mousemove', listener);
    });
  }
}
