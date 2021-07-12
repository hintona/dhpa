import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export interface Weekdays {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
  ngOnInit(): void {
    this.getToday();
  }
  
  today:number | undefined;

  days: Weekdays[] = [
    {value: 1, viewValue: 'Mon 9am-5pm'},
    {value: 2, viewValue: 'Tues 9am-5pm'},
    {value: 3, viewValue: 'Wed 9am-5pm'},
    {value: 4, viewValue: 'Thurs 9am-5pm'},
    {value: 5, viewValue: 'Fri 9am-5pm'},
    {value: 6, viewValue: 'Closed on Weekends'}
  ];
  
  getToday(){
    let thisDay = new Date();
    if(thisDay.getDay() == 0){
      this.today = 6;
    }
    else{ this.today = thisDay.getDay(); }
  }
}