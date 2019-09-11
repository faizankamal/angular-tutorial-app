import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompropertybinding',
  templateUrl: './custompropertybinding.component.html',
  styleUrls: ['./custompropertybinding.component.css']
})
export class CustompropertybindingComponent implements OnInit {

  parentObject = 'Parent Data';

  userName = '';

  status = 'Not Saved';
  constructor() { }

  ngOnInit() {
  }

  updateStatus() {
    this.status = 'Saved';
  }
}
