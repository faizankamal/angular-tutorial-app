import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { formatDate } from '@angular/common';
import { SessionService } from './session.service';



@Pipe({
  name: 'localDatePipe'
})
export class LocalDatePipe implements PipeTransform {

  constructor(private session: SessionService) { }

  transform(value: Date, format: string): any {

    if (!value) { return ''; }
    if (!format) { format = 'medium'; }

    // let timeObj = new Intl.DateTimeFormat('en-US', defaultTimeFormat).format(value);

    // en-IN   hi_IN
    // ms_MY

    // const timeObj = new Intl.DateTimeFormat('en-US', defaultTimeFormat).format(value);
    const defaultTimeFormat = {
      hour: '2-digit', minute: '2-digit', second: '2-digit'
    };

    return formatDate(value, format, this.session.locale);

  }
}
