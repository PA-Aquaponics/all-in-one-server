import {Component, OnInit, Predicate} from '@angular/core';
import {Observable} from "rxjs";
import {DefaultService, Sensor} from "../api/v1";
import {SensorService} from "../services/sensor.service";
import {mapSensorsByPredicate} from "../shared/SharedFunctions";

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.sass']
})
export class MainviewComponent implements OnInit {

  sensors!: Sensor[];
  systemMap?: Map<string, Sensor[]>;

  constructor(
    private readonly sensorService: SensorService
  ) { }

  ngOnInit(): void {
    this.sensorService.getSensors().subscribe(result => {
      this.sensors = result;
      this.systemMap = this.mapSensorsToSystem(this.sensors);
    });
  }

  private mapSensorsToSystem(sensors: Sensor[]): Map<string, Sensor[]> {
    return mapSensorsByPredicate(sensors, s=> s.system);
  }
}
