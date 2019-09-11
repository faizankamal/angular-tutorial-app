import { Component, OnInit } from '@angular/core';
import { CookieService } from "angular2-cookie/services/cookies.service";

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css']
})
export class StorageComponent implements OnInit {

  name = '';
  email = '';

  constructor(private cookieService: CookieService) {

  }

  ngOnInit() {
    window.localStorage.setItem('userName', 'Faizan');
    this.name = window.localStorage.getItem('userName');

    this.cookieService.put("email", "faizanstays@gmail.com");
    this.email = this.cookieService.get("email");

  }

}
