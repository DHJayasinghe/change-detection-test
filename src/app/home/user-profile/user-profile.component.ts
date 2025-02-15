import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MockUsersService, IUserProfile } from '../../services/mock-users.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'user-profiles',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  imports: [CommonModule, MatCardModule, MatTableModule, MatPaginatorModule]
})
export class UserProfileComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<IUserProfile>([]);
  displayedColumns: string[] = ['name', 'language', 'bio'];
  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  constructor(public userService: MockUsersService) {
    this.userService.getData().subscribe(d => {
      this.dataSource.data = d;
    })
    // this.backgroundApiRefresh();
  }

  backgroundApiRefreshExample() {
    setInterval(() => {
      this.userService.getData().subscribe(d => {
        console.log('api 1 called');
        this.userService.getData().subscribe(d => {
          console.log('api 2 called again');
          // do some data aggregation from both APIs & then need to update the UI
        });
      })
    }, 15000);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getUserCount() {
    return this.dataSource?.data?.length ?? 0;
  }
}
