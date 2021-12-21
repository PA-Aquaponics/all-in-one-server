import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogContentComponent} from "./dialog-content/dialog-content.component";
import {Sensor} from "../api/v1";

@Component({
  selector: 'app-new-sensor-dialog',
  templateUrl: './new-sensor-dialog.component.html',
  styleUrls: ['./new-sensor-dialog.component.sass']
})
export class NewSensorDialogComponent implements OnInit {

  sensor?: Sensor

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '600px',
      data: {systemName: 'Test'},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }
}

export interface SensorDialogData {
  systemName: string,
  tankName: string,

  sensorName: string,
  serialNrDevice: number,

  deviceType: string,

  startingPos: number,
  length: number,
  datatype: string,
  modBusPort: string,
  serialPort: string,

  alarmActive: boolean,

  alarmUpperLimit: number,
  alarmLowerLimit: number
}
