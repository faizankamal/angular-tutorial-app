import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';


import { User, Employee } from './models/user';


@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  updatedStatus = new EventEmitter<string>();

  updatedValue = new Subject<string>();

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  private options = { headers: this.headers };

  constructor(private http: HttpClient) { }

  getData() {
    return 'Faizan Kamal';
  }

  getUserData() {
    const url = 'https://reqres.in/api/users/2';
    return this.http.get(url, this.options);
  }

  getAllUserData() {
    const httpOptions = {
      headers: { 'Content-Type': 'application/json' },
      params: { page: '2' }
    };

    const url = 'https://reqres.in/api/users';
    return this.http.get(url, httpOptions);
  }


  login() {
    const postData = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka'
    };
    const url = 'https://reqres.in/api/login';
    return this.http.post(url, postData);
  }

  getEmployees(id) {
    const url = 'http://fakerestapi.azurewebsites.net/api/Authors/' + id;
    return this.http.get(url, this.options);
  }
}
