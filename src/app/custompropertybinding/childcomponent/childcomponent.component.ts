import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-childcomponent',
  templateUrl: './childcomponent.component.html',
  styleUrls: ['./childcomponent.component.css']
})
export class ChildcomponentComponent implements OnInit {

  @Input() userData;

  @Output() savedEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  save() {
    this.savedEvent.emit('Saved Data');
  }
}
