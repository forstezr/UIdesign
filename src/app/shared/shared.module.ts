import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbInputModule, NbCheckboxModule, NbButtonModule, NbIconModule, NbDatepickerModule, NbSelectModule } from '@nebular/theme';
import { AppSmartTableComponent } from './components/smart-table.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [AppSmartTableComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbInputModule,
    NbCheckboxModule,
    NbButtonModule,
    NbIconModule,
    NbDatepickerModule,
    Ng2SmartTableModule,
    NbSelectModule
  ],
  exports: [NbCardModule, NbInputModule, NbCheckboxModule, NbButtonModule, NbIconModule, NbDatepickerModule, AppSmartTableComponent, Ng2SmartTableModule, NbSelectModule]
})
export class SharedModule { }
