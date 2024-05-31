import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'vehiculo-edit/:id',
    loadChildren: () => import('./vehiculo/vehiculo-edit/vehiculo-edit.module').then( m => m.VehiculoEditPageModule)
  },
  {
    path: 'vehiculo-list',
    loadChildren: () => import('./vehiculo/vehiculo-list/vehiculo-list.module').then( m => m.VehiculoListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
