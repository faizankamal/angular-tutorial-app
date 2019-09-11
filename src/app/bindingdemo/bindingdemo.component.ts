import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindingdemo',
  templateUrl: './bindingdemo.component.html',
  styleUrls: ['./bindingdemo.component.css']
})
export class BindingdemoComponent implements OnInit {

  stringInterpolation = 'String Interpolation';

  isButtonDisabled = true;

  constructor() { }

  ngOnInit() {
  }

  clear() {
    alert('Clear Clicked');
  }
}
