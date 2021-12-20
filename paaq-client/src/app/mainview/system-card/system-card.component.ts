import {Component, Input, OnInit} from '@angular/core';
import {Log, Sensor} from "../../api/v1";
import {mapSensorsByPredicate} from "../../shared/SharedFunctions";
import {Router} from "@angular/router";

@Component({
  selector: 'app-system-card',
  templateUrl: './system-card.component.html',
  styleUrls: ['./system-card.component.sass']
})
export class SystemCardComponent implements OnInit {

  @Input() systemName!: string;
  @Input() systemSensors!: Sensor[];
  @Input() logs!: Log[];

  tanks?: Map<string, Sensor[]>;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tanks = this.mapSensorsByTank(this.systemSensors);
  }

  private mapSensorsByTank(sensors: Sensor[]): Map<string, Sensor[]> {
    return mapSensorsByPredicate(sensors, s => s.tank);
  }

  viewSystemDetails() {
      const systemName = this.systemName ? this.systemName : null;
      this.router.navigate(['/system', { id: systemName }]);
  }
}
