export class Sensor {
    id: number;
    name: string;
    dataType: number;
    values: number;

    constructor(id: number, name: string, dataType: number, values: number){
        this.id = id;
        this.name = name;
        this.dataType = dataType;
        this.values = values;
    }
}