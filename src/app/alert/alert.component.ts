import { Component, OnInit } from '@angular/core';
import { Alert } from '../interface/alerts';

const ALERTS: Alert[] = [
  {
    type: 'success',
    message: 'this is success alert',
  },
  {
    type: 'warning',
    message: 'this is warning alert',
  },
];
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  alerts:Alert[]=[];
  constructor() {
    this.reset();
  }
close(alert:Alert) {
  this.alerts.splice(this.alerts.indexOf(alert),1)
}
reset() {
  this.alerts=Array.from(ALERTS);
}
  ngOnInit(): void {}
}
