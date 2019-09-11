import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogserviceService {

  constructor() { }

  log(methodName) {
    console.log('Inside method' + methodName);
  }

}
