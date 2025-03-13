import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {
  $subject = new Subject<number>();

  notify(sequence: number){
    this.$subject.next(sequence);
  }
}
