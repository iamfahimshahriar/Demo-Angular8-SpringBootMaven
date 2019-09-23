import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class User {
  constructor(
    public oid: string,
    public name: string,
    public designation: string,
    public salary: string,
  ) {}
}
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }
  getUsers() {
    console.log('test call');
    return this.httpClient.get<User[]>('http://localhost:8080/users');
  }
  public deleteUsers(user) {
    return this.httpClient.delete<User>('http://localhost:8080/users' + '/' + user.oid);
  }

  public createUsers(user) {
    return this.httpClient.post<User>('http://localhost:8080/users', user);
  }
}
