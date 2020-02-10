import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeviceSetupRoutingModule } from './device-setup-routing.module';
import { DeviceSetupComponent } from './device-setup.component';
import { SharedModule } from '../shared/shared.module';
import { GatewaySetupComponent } from './gateway-setup/gateway-setup.component';
import { Card5Component } from './gateway-setup/card5/card5.component';
import { SensorNodeSetupComponent } from './sensor-node-setup/sensor-node-setup.component';
import { Card6Component } from './sensor-node-setup/card6/card6.component';
import { ActuationNodeSetupComponent } from './actuation-node-setup/actuation-node-setup.component';
import { Card7Component } from './actuation-node-setup/card7/card7.component';

@NgModule({
  declarations: [DeviceSetupComponent, GatewaySetupComponent, Card5Component, SensorNodeSetupComponent, Card6Component, ActuationNodeSetupComponent, Card7Component],
  imports: [
    CommonModule,
    DeviceSetupRoutingModule,
    SharedModule
  ]
})
export class DeviceSetupModule { }
