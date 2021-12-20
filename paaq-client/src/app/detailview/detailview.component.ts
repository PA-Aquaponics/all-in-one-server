import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SensorService} from "../services/sensor.service";
import {Location} from "@angular/common";
import {Sensor} from "../api/v1";
import {Log} from "../api/v1";
import {mapSensorsByPredicate} from "../shared/SharedFunctions";
import { LogService } from '../services/log.service';

@Component({
  selector: 'app-detailview',
  templateUrl: './detailview.component.html',
  styleUrls: ['./detailview.component.sass']
})
export class DetailviewComponent implements OnInit {

  systemName?: string;
  sensors?: Sensor[];
  logs?: Log[];

  constructor(
    private route: ActivatedRoute,
    private sensorService: SensorService,
    private logService: LogService,
    private location: Location
  ) { }

  ngOnInit(): void {
    const systemName = this.route.snapshot.paramMap.get('id');
    this.systemName = systemName ? systemName : '';
    this.getSensors();
    this.getLogs();
  }

  getSensors(): void {
    this.sensorService.getSensors().subscribe(sensors => {
      const sensorMap = mapSensorsByPredicate(sensors, s => s.system);
      if (this.systemName && sensorMap.has(this.systemName)) {
        this.sensors = sensorMap.get(this.systemName);
      }
    })
  }

  getLogValue(sensor: Sensor): any{
    return this.logs?.filter(l => l.name === sensor.name)[0].value;
  }

  getLogs(): void {
    if (!this.logs) {
      this.logs = [];
    }
    this.logService.getLogs().subscribe(logs => {
      logs.forEach(log =>{
        if(!this.logs!.some(l => l.name === log.name)){
          this.logs!.push(log)
        }else{
          let oldLog = this.logs!.filter(l => l.name === log.name)[0];
          if(log.timestamp > oldLog.timestamp){
            this.logs![logs.indexOf(oldLog)] = log
          }
        }
      })
    })
  }
}