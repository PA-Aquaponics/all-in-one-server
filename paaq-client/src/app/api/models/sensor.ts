/* tslint:disable */
/* eslint-disable */
export interface Sensor {
  alaramActive?: number;
  alarmLowerLimit: number;
  alarmUpperLimit: number;
  dataType: string;
  deviceType: string;
  id?: number;
  length: number;
  modBusPort: number;
  name: string;
  serialNrDevice: string;
  serial_port: string;
  startingPos: number;
  system: string;
  tank: string;
  unit: string;
}
