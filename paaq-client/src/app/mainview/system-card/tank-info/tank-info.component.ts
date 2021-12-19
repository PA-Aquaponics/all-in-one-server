import {Component, Input, OnInit} from '@angular/core';
import {Sensor} from "../../../api/v1";

@Component({
  selector: 'app-tank-info',
  templateUrl: './tank-info.component.html',
  styleUrls: ['./tank-info.component.sass']
})
export class TankInfoComponent implements OnInit {

  @Input() tankName!: string;
  @Input() tankSensors!: Sensor[];

  oxygenSensor?: Sensor;
  phSensor?: Sensor;
  tempSensor?: Sensor;

  constructor() { }

  ngOnInit(): void {
    this.oxygenSensor = this.tankSensors.find(s => s.unit === '%');
    this.phSensor = this.tankSensors.find(s => s.unit === 'pH');
    this.tempSensor = this.tankSensors.find(s => s.unit === 'Celcius' || s.unit === 'Celsius');
  }
}
