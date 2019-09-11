import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataserviceService } from './dataservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'tutorial-app';

  dataFromEmitter: any;

  dataFromSubject: any;

  showNgConent = false;

  constructor(private router: Router, private dataObject: DataserviceService) { }

  openTab(url) {
    if (url === 'showNgConent') {
      this.showNgConent = true;
    } else {
      this.router.navigateByUrl(url);
      this.showNgConent = false;
    }
  }

  ngOnInit() {
    this.dataObject.updatedStatus.subscribe(data => {
      this.dataFromEmitter = data;
    });

    this.dataObject.updatedValue.subscribe(data => {
      this.dataFromSubject = data;
    });
  }

  ngOnDestroy() {
    this.dataObject.updatedStatus.unsubscribe();
  }

  myFunction(myTopnav) {
    if (myTopnav.className === "topnav") {
      myTopnav.className += " responsive";
    } else {
      myTopnav.className = "topnav";
    }
  }
}
