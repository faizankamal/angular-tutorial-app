import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css']
})
export class Tab1Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openTab(url) {
    this.router.navigateByUrl(url);
  }
}
