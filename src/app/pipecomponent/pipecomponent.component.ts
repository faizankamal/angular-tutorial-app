import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipecomponent',
  templateUrl: './pipecomponent.component.html',
  styleUrls: ['./pipecomponent.component.css']
})
export class PipecomponentComponent implements OnInit {

  name: any;

  todaydate: any;

  constructor() {
    this.name = 'Faizan Kamal';
    this.todaydate = new Date();
  }

  ngOnInit() {
  }

}
