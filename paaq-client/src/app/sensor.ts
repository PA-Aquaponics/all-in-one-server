export class Sensor {
    id: number;
    name: string;
    serialNrDevice: string;
    deviceType: string;
    unit: string;
    tank: string;
    system: string;
    startingPos: number;
    length: number;
    dataType: number;
    modBusPort: number;
    serialPort: string;
    alarmUpperLimit: number;
    alarmLowerLimit: number;
    alarmActive: number;
    value: number;
    

    constructor(id: number, name: string, serialNrDevice: string, deviceType: string, unit: string, tank: string,
        system: string, startingPos: number, length: number, dataType: number, modBusPort: number, serialPort: string, 
        alarmUpperLimit: number, alarmLowerLimit: number, alarmActive: number){

        this.id = id;
        this.name = name;
        this.serialNrDevice = serialNrDevice;
        this.deviceType = deviceType;
        this.unit = unit;
        this.tank = tank;
        this.system = system;
        this.startingPos = startingPos;
        this.length = length;
        this.dataType = dataType;
        this.modBusPort = modBusPort;
        this.serialPort = serialPort;
        this.alarmUpperLimit = alarmUpperLimit;
        this.alarmLowerLimit = alarmLowerLimit;
        this.alarmActive = alarmActive;
        this.value = 0; //GET WITH REST
    }
}