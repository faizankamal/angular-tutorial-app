import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-demo',
  templateUrl: './form-control-demo.component.html',
  styleUrls: ['./form-control-demo.component.css']
})
export class FormControlDemoComponent implements OnInit {

  formGroup: FormGroup;

  loginData: string;

  dataFromFormGroup: string;

  @ViewChild('emailId') email: ElementRef;

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      emailid: new FormControl('xyz@gmail.com', [Validators.required, Validators.minLength(5)]),
      passwd: new FormControl('xxxxxxx', this.passwordvalidation),
      name: new FormControl('xyz', Validators.required)
    });
  }

  onClickSubmit(data) {
    this.loginData = data.emailid + ' :::  ' + data.passwd + '::::' + data.name;
    this.dataFromFormGroup = this.formGroup.get('emailid').value;
  }

  passwordvalidation(formcontrol) {
    if (formcontrol.value.length < 5) {
      return { passwd: true };
    }
    return null;
  }

  showLocalReferenceValue(emailId) {
    alert('Email :' + emailId.value);

    alert('Email for View Child' + this.email.nativeElement.value);
  }
}
