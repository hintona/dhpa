import { Component } from '@angular/core';

export interface Weekdays {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  days: Weekdays[] = [
    {value: 'm', viewValue: 'Mon 9am-5pm'},
    {value: 't', viewValue: 'Tues 9am-5pm'},
    {value: 'w', viewValue: 'Wed 9am-5pm'},
    {value: 'r', viewValue: 'Thurs 9am-5pm'},
    {value: 'f', viewValue: 'Fri 9am-5pm'},
    {value: 'ends', viewValue: 'Closed on Weekends'}
  ];
  //TODO: sense the day of the week and default to that
  //TODO: Also fix colour scheme of dropdown
}