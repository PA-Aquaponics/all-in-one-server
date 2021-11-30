import { Component, OnInit } from '@angular/core';
import { SENSORS } from '../mock-sensors';

@Component({
  selector: 'app-sensors',
  templateUrl: './sensors.component.html',
  styleUrls: ['./sensors.component.css']
})
export class SensorsComponent implements OnInit {

  //GET DATA(EXAMPLE DATA)
  sensors = SENSORS;

  constructor() {}

  ngOnInit(): void {
  }

}
