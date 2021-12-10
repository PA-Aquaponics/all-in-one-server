import {Component, OnInit, Predicate} from '@angular/core';
import {Observable} from "rxjs";
import {DefaultService, Sensor} from "../api/v1";
import {SensorService} from "../services/sensor.service";

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
      this.systemMap = this.mapSensorsToSystem(this.sensors, s => s.system);
      console.log(this.systemMap);
    });
  }

  private mapSensorsToSystem(sensors: Sensor[], predicate: (sensor: Sensor) => string): Map<string, Sensor[]> {
    const map = new Map<string, Sensor[]>();
    sensors.forEach(sensor => {
      const key = predicate(sensor);
      if (key) {
        const collection = map.get(key);
        if (collection) {
          collection.push(sensor);
        } else {
          map.set(key, [sensor]);
        }
      }
    });
    return map;
  }
}
