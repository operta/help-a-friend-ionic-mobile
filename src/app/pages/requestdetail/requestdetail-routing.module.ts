import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestDetailPage } from './requestdetail.page';

const routes: Routes = [
  {
    path: ':id',
    component: RequestDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RequestDetailPageRoutingModule {}
