import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculoListPage } from './vehiculo-list.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculoListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculoListPageRoutingModule {}
