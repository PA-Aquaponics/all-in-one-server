import {Component, Input, OnInit} from '@angular/core';
import {Sensor} from "../../api/v1";
import {mapSensorsByPredicate} from "../../shared/SharedFunctions";

@Component({
  selector: 'app-system-card',
  templateUrl: './system-card.component.html',
  styleUrls: ['./system-card.component.sass']
})
export class SystemCardComponent implements OnInit {

  @Input() systemName!: string;
  @Input() systemSensors!: Sensor[];

  tanks?: Map<string, Sensor[]>;

  constructor() { }

  ngOnInit(): void {
    this.tanks = this.mapSensorsByTank(this.systemSensors);
  }

  private mapSensorsByTank(sensors: Sensor[]): Map<string, Sensor[]> {
    return mapSensorsByPredicate(sensors, s => s.tank);
  }

  viewSysteDetails() {

  }
}
