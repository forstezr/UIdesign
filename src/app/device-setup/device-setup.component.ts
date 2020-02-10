import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-device-setup',
  templateUrl: './device-setup.component.html',
  styleUrls: ['./device-setup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceSetupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
