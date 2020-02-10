import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { Card1Component } from './card1/card1.component';
import { Card2Component } from './card2/card2.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, Card1Component, Card2Component],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
