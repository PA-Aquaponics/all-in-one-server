import {Component, Input, OnInit} from '@angular/core';
import {Log, Sensor} from "../../api/v1";

@Component({
  selector: 'app-tank-card',
  templateUrl: './tank-card.component.html',
  styleUrls: ['./tank-card.component.sass']
})
export class TankCardComponent implements OnInit {

  @Input() tankName!: string;
  @Input() tankSensors!: Sensor[];
  @Input() logs!: Log[];

  constructor() { }

  ngOnInit(): void {
  }

  getLogValue(sensor: Sensor): any{
    return this.logs?.filter(l => l.name === sensor.name)[0].value;
  }
}
