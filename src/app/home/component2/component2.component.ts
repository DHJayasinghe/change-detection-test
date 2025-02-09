import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataSharingService, IUserProfile } from './data-sharing.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
  imports: [CommonModule]

})
export class Component2Component implements OnInit {
  @Input() myinput: number = 0;
  eventHandlerChange: number = 0;
  // myObservable: Observable<number>; 
  profiles: IUserProfile[]= [];
  counter = 0;

  constructor(public dataShare: DataSharingService) {
    // this.myObservable = this.dataShare.$changedData.asObservable();
    this.dataShare.getUserProfiles().subscribe(d=>{
      this.profiles = d;
    })

    // setInterval(() => {
    //   this.counter++;
    // }, 100);
   }

  ngOnInit() {
    console.log('Component2Component OnInit');

    // this.updateTime();
    // setInterval(() => {
    //   // this.updateTime();

    //   console.log('timer running');
    // }, 3000);
  }

  updateTime(): void {
    const now = new Date();
    // this.currentTime.set(now.toLocaleTimeString()); // Example: 10:45:23 AM
    // this.something.emit(this.currentTime());
  }


  logChangeDetection() {
    console.log('Component2Component template evaluated');
    return true;
  }

  clickMe() {
    this.eventHandlerChange = new Date().getSeconds();
  }

  change(){
    
  }

  viewProfile(){
    console.log('clicked');
  }
}
