import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeviceSetupComponent } from './device-setup.component';
import { GatewaySetupComponent } from './gateway-setup/gateway-setup.component';
import { SensorNodeSetupComponent } from './sensor-node-setup/sensor-node-setup.component';
import { ActuationNodeSetupComponent } from './actuation-node-setup/actuation-node-setup.component';

const routes: Routes = [
  { path: '', component: DeviceSetupComponent },
  { path: 'Gateway-Setup', component: GatewaySetupComponent },
  { path: 'Sensor-Node-Setup', component: SensorNodeSetupComponent },
  { path: 'Actuation-Node-Setup', component: ActuationNodeSetupComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeviceSetupRoutingModule { }
