import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateRequestPage } from './create-request.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pick-category',
    pathMatch: 'full'
  },
  {
    path: 'pick-category',
    loadChildren: () => import('../pick-category/pick-category.module').then(m => m.PickCategoryPageModule)
  },
  {
    path: 'create-request',
    component: CreateRequestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateRequestPageRoutingModule {}
