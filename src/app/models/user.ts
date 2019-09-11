import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  id: string;
  email: string;
  first_name: any;
  last_name: any;
  avatar: any;
}

export class Employee {
  ID: any;
  IDBook: any;
  FirstName: any;
  LastName: any;
}
