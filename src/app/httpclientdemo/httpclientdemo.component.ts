import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../dataservice.service';
import { User, Employee } from '../models/user';
import { map } from 'rxjs/operators';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-httpclientdemo',
  templateUrl: './httpclientdemo.component.html',
  styleUrls: ['./httpclientdemo.component.css']
})
export class HttpclientdemoComponent implements OnInit {

  userData: any = '';

  userList: User[];

  isSuccess = false;

  employee: any;

  error:any;

  constructor(private service: DataserviceService, public user: User) {
  }

  ngOnInit() {
    //  Get single user
    this.service.getUserData()
      .subscribe(
        res => {
          const object = res;
          const key = 'data';
          this.user = res[key] as User;
          console.log(this.user);
        },
        err => {
          console.log(err);
        }
      );



    // login using post
    this.service.login()
      .subscribe(
        res => {
          this.isSuccess = true;
        },
        err => {
          console.log(err);
        }
      );
  }


  getUsers() {
    // Get list of users
    this.service.getAllUserData()
      .subscribe(
        res => {
          const object = res;
          const key = 'data';
          this.userList = res[key] as User[];
        },
        err => {
          console.log(err);
        }
      );
  }

  getEmployees(element) {
    // Get list of users
    this.service.getEmployees(element.value)
      .pipe(debounceTime(400))
      .subscribe(
        res => {
          this.employee = res as Employee;
        },
        err => {
          this.employee = {};
          this.error='user not found';
        }
      );
  }
}
