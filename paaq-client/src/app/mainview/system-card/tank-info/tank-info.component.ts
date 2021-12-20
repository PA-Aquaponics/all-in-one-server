import {Component, Input, OnInit} from '@angular/core';
import {Log, Sensor} from "../../../api/v1";

@Component({
  selector: 'app-tank-info',
  templateUrl: './tank-info.component.html',
  styleUrls: ['./tank-info.component.sass']
})
export class TankInfoComponent implements OnInit {

  @Input() tankName!: string;
  @Input() tankSensors!: Sensor[];
  @Input() logs!: Log[];

  oxygenSensor?: Sensor;
  phSensor?: Sensor;
  tempSensor?: Sensor;

  constructor() { }

  ngOnInit(): void {
    this.oxygenSensor = this.tankSensors.find(s => s.unit === '%');
    this.phSensor = this.tankSensors.find(s => s.unit === 'pH');
    this.tempSensor = this.tankSensors.find(s => s.unit === 'Celcius' || s.unit === 'Celsius');
  }

  getLogValue(sensor: Sensor): any{
    if(this.logs!.filter(l => l.name === sensor.name).length > 0){
      return this.logs?.filter(l => l.name === sensor.name)[0].value;
    }else{
      return "--";
    }
  }
}
