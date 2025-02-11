import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DataSharingService, IUserProfile } from './data-sharing.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'user-profiles',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [CommonModule, MatCardModule, MatTableModule, MatPaginatorModule]

})
export class UserProfileComponent implements OnInit, AfterViewInit  {
  dataSource = new MatTableDataSource<IUserProfile>([]);
  displayedColumns: string[] = ['name', 'language', 'bio'];
  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  constructor(public dataShare: DataSharingService) {
    // this.myObservable = this.dataShare.$changedData.asObservable();
    this.dataShare.getUserProfiles().subscribe(d=>{
      this.dataSource.data = d;
    })
   }

  ngOnInit() {
    console.log('Component2Component OnInit');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  updateTime(): void {
    const now = new Date();
    // this.currentTime.set(now.toLocaleTimeString()); // Example: 10:45:23 AM
    // this.something.emit(this.currentTime());
  }
  
  viewProfile(){
    console.log('clicked');
  }
}
