import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivesdemo',
  templateUrl: './directivesdemo.component.html',
  styleUrls: ['./directivesdemo.component.css']
})
export class DirectivesdemoComponent implements OnInit {

  isTrue = true;

  showifBlock = false;

  userData = ['Faizan', 'Rahul', 'Test user'];

  studentData = [{ name: 'Faizan', age: 11 },
  { name: 'Rahul', age: 16 },
  { name: 'Test', age: 11 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
