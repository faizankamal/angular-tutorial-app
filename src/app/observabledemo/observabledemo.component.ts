import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-observabledemo',
  templateUrl: './observabledemo.component.html',
  styleUrls: ['./observabledemo.component.css']
})

export class ObservabledemoComponent implements OnInit , OnDestroy {

  constructor(private service: DataserviceService) { }

  ngOnInit() {
    this.service.updatedStatus.emit('Data sent from Observable Component using Event Emitter');

    this.service.updatedValue.next('Data sent from Observable Component using Subject');
  }


  ngOnDestroy() {
  }
}
