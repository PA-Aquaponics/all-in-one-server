import {Component, OnInit, Predicate} from '@angular/core';
import {Observable} from "rxjs";
import {DefaultService, Log, Sensor} from "../api/v1";
import { LogService } from '../services/log.service';
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
  logs: Log[] = []

  constructor(
    private readonly sensorService: SensorService,
    private readonly logService: LogService
  ) { }

  ngOnInit(): void {
    this.sensorService.getSensors().subscribe(result => {
      this.sensors = result;
      this.systemMap = this.mapSensorsToSystem(this.sensors);
    });

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

  private mapSensorsToSystem(sensors: Sensor[]): Map<string, Sensor[]> {
    return mapSensorsByPredicate(sensors, s=> s.system);
  }
}
