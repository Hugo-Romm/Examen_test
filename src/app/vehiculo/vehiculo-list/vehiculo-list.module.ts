import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculoListPageRoutingModule } from './vehiculo-list-routing.module';

import { VehiculoListPage } from './vehiculo-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculoListPageRoutingModule
  ],
  declarations: [VehiculoListPage]
})
export class VehiculoListPageModule {}
