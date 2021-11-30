import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.sass']
})
export class SensorComponent implements OnInit {

  name: string;
  value: number;

  constructor() {
    
  }

  ngOnInit(): void {
    
    value = 0; //should fetch latest value data from DB (SELECT Value FROM ModBusLog WHERE Name = 'name');
  }

}
