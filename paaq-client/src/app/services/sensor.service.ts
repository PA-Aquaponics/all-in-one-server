import { Injectable } from '@angular/core';
import {DefaultService, Sensor} from "../api/v1";
import {Observable} from "rxjs";
import {share} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  constructor(
    private readonly apiService: DefaultService
  ) { }

  getSensors(): Observable<Sensor[]> {
    return this.apiService.sensorsGet().pipe(share());
  }
}
