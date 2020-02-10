import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-card5',
  templateUrl: './card5.component.html',
  styleUrls: ['./card5.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Card5Component implements OnInit {
  settings =   {
    "columns": {
      "sensorType": {
        "title": "Sensor Type"
      },
      "sensorId": {
        "title": "Sensor ID"
      }
    },
    "delete": {
      "confirmDelete": true
    },
    "add": {
      "confirmCreate": true
    },
    "edit": {
      "confirmSave": true
    },
    "actions": {
      "add": true,
      "edit": true,
      "delete": true
    }
  };
  source =   [];

  constructor() { }

  ngOnInit() {
  }

}
