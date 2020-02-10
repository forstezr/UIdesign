import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './log-in.component';
import { LoginContainer1Component } from './login-container1/login-container1.component';
import { Space36Component } from './space36/space36.component';
import { SignUpForm1Component } from './sign-up-form1/sign-up-form1.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [LogInComponent, LoginContainer1Component, Space36Component, SignUpForm1Component],
  imports: [
    CommonModule,
    LogInRoutingModule,
    SharedModule
  ]
})
export class LogInModule { }
