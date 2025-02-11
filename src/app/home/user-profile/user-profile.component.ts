import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
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
export class UserProfileComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<IUserProfile>([]);
  displayedColumns: string[] = ['name', 'language', 'bio'];
  @ViewChild(MatPaginator) paginator: MatPaginator = <MatPaginator>{};

  constructor(public dataShare: DataSharingService) {
    this.dataShare.getUserProfiles().subscribe(d => {
      this.dataSource.data = d;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
