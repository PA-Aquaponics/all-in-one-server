import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SensorService} from "../services/sensor.service";
import {Location} from "@angular/common";
import {Sensor} from "../api/v1";
import {mapSensorsByPredicate} from "../shared/SharedFunctions";

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.sass']
})
export class DetailviewComponent implements OnInit {

  systemName?: string;
  sensors?: Sensor[];

  constructor(
    private route: ActivatedRoute,
    private sensorService: SensorService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const systemName = this.route.snapshot.paramMap.get('id');
    this.systemName = systemName ? systemName : '';
    this.getSensors();
  }

  getSensors(): void {
    this.sensorService.getSensors().subscribe(sensors => {
      const sensorMap = mapSensorsByPredicate(sensors, s => s.system);
      if (this.systemName && sensorMap.has(this.systemName)) {
        this.sensors = sensorMap.get(this.systemName);
      }
    })
  }
}
