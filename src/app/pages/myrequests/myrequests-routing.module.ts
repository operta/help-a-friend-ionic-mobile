import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRequestsPage } from './myrequests.page';

const routes: Routes = [
  {
    path: '',
    component: MyRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyRequestsPageRoutingModule {}
