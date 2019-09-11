import { Component, OnInit } from '@angular/core';
import { LogserviceService } from '../logservice.service';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-servicedemo',
  templateUrl: './servicedemo.component.html',
  styleUrls: ['./servicedemo.component.css'],
  providers: [LogserviceService, DataserviceService]
})
export class ServicedemoComponent implements OnInit {

  userName: string;

  dataFromEmitter: any;

  dataFromSubject: any;

  constructor(private logObject: LogserviceService, private dataObject: DataserviceService) {
    this.logObject.log('ServicedemoComponent constructor');
  }

  ngOnInit() {
    this.dataObject.updatedStatus.subscribe(data => {
      this.dataFromEmitter = data;
    });

    this.dataObject.updatedValue.subscribe(data => {
      this.dataFromSubject = data;
    });
  }

  getData() {
    this.userName = this.dataObject.getData();
  }
}
