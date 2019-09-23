import { Component, OnInit } from '@angular/core';
import { HttpClientService, User } from '../service/http-client.service';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export class HospitalStuffList {
  body: Body;

  constructor() {
      this.body = new Body();
  }
}

export class Body {
  data: HospitalStuff[];
}
export class HospitalStuff {
  gender: string;
  fatherHusbandNameBn: string;
  oid: string;
  fatherHusbandNameEn: string;
  hospitalNameBn: string;
  staffType: string;
  religion: string;
  hospitalNameEn: string;
  designationEn: string;
  staffIdEn: number;
  staffIdBn: string;
  designationBn: string;
  staffName: string;
  staffNameBn: string;
  status: string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
// tslint:disable-next-line:component-class-suffix

export class UserComponent implements OnInit {
  users: HospitalStuff[];
  constructor( private httpClientService: HttpClientService, private httpClient: HttpClient) { }


  ngOnInit() {
    this.getHospitalStuffList();
    // this.httpClientService.getUsers().subscribe(
    //   response => this.handleSuccessfulResponse(response),
    //  );
  }
  handleSuccessfulResponse(response) {
    this.users = response;
  }
  getHospitalStuffList() {
    this.getStuffList().subscribe(
        (data) => {
            this.users = data.body.data;

            console.log(this.users);
        });
}
  getStuffList(): Observable<HospitalStuffList> {
    const url = 'http://104.154.191.244/cssm/web/portal/v1/' + 'hospital-staff-list';
    // tslint:disable-next-line:max-line-length
    const body = '{"header":{"requestId":"\'$(uuidgen)\'","requestClient":"cssm","requestType":"web/portal/v1/hospital-staff-list","requestSource":"curl","requestSourceService":"terminal","requestVersion":"1.0","requestTime":"2017-01-14T12:14:39.615Z","requestTimeoutInSeconds":"-1","requestRetryCount":"0"},"meta":{},"body":{"operation":"getStaffList"}}';
    return this.httpClient.post<HospitalStuffList>(url, body, {
        headers: new HttpHeaders({
            'content-type':  'application/json',
            authorization: 'Bearer 20181217-123927-HG3wbscAx1215fx'
        })
    });
  }

  deleteUser(user: User): void {
    this.httpClientService.deleteUsers(user)
      .subscribe( data => {
        // this.users = this.users.filter(u => u !== user);
      });
    }

}
