import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { MockUsersService, IUserProfile } from '../../services/mock-users.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { AddNewAccountComponent } from '../add-new-account/add-new-account.component';

@Component({
  selector: 'app-users',
  templateUrl: './user-accounts.component.html',
  styleUrls: ['./user-accounts.component.css'],
  imports: [CommonModule, MatCardModule, MatTableModule, MatPaginatorModule, AddNewAccountComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfileComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<IUserProfile>([]);
  displayedColumns: string[] = ['name', 'language'];

  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  constructor(public userService: MockUsersService) {
    // storing large data in-memory and reference the dataset in UI
    this.userService.getData().subscribe(d => {
      this.dataSource.data = d;
    })
    // this.backgroundApiRefresh();
  }

  backgroundApiRefreshExample() {
    setInterval(() => {
      this.userService.getData().subscribe(d => {
        console.log('API 1 called');
        this.userService.getData().subscribe(d => {
          console.log('API 2 called again');
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

  whenNewAccountAdded(name: string) {
    this.dataSource.data.push({
      id: new Date().getTime().toString(),
      name: name,
      bio: 'NA',
      language: 'English'
    });
  }
}
