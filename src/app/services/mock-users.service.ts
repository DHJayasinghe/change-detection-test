import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockUsersService {
  $changedData = new Subject<number>();

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get<IUserProfile[]>("https://microsoftedge.github.io/Demos/json-dummy-data/1MB.json");
  }
}

export interface IUserProfile {
  name: string,
  language: string,
  id: string,
  bio: string,
}