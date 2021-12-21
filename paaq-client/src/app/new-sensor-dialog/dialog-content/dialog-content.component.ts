import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {NewSensorDialogComponent, SensorDialogData} from "../new-sensor-dialog.component";

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.sass']
})
export class DialogContentComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewSensorDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SensorDialogData,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
