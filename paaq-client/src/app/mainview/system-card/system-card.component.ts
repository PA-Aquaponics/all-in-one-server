import {Component, Input, OnInit} from '@angular/core';
import {Sensor} from "../../api/v1";

@Component({
  selector: 'app-system-card',
  templateUrl: './system-card.component.html',
  styleUrls: ['./system-card.component.sass']
})
export class SystemCardComponent implements OnInit {

  @Input() systemName!: string;
  @Input() systemSensors!: Sensor[];

  constructor() { }

  ngOnInit(): void {
  }

}
