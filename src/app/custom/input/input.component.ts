import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'input-text',
  templateUrl: './input.html'
})
export class InputComponent implements OnInit {

  @Input() fieldName: string;

  @Input() fieldValue: string;

  @Input() placeholderText: string;

  constructor() { }

  ngOnInit() {
  }

}
