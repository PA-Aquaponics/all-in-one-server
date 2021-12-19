import { Injectable } from '@angular/core';
import {DefaultService, Log} from "../api/v1";
import {Observable} from "rxjs";
import {share} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor(
    private readonly apiService: DefaultService
  ) { }

  getLogs(): Observable<Log[]> {
    return this.apiService.logsGet().pipe(share());
  }
}
