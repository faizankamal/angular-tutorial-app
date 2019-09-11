import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routingdemo',
  templateUrl: './routingdemo.component.html',
  styleUrls: ['./routingdemo.component.css']
})
export class RoutingdemoComponent implements OnInit {

  constructor(private router: Router) {}

  openTab(url) {
    this.router.navigateByUrl(url);
  }

  ngOnInit() {
  }

}
