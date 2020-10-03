import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestDetailPageRoutingModule} from './requestdetail-routing.module';

import { RequestDetailPage } from './requestdetail.page';
import { RatingModule } from 'ng-starrating';
import {URequestService} from '../create-request/u-request.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingModule,
    RequestDetailPageRoutingModule
  ],
  declarations: [RequestDetailPage],
  providers: [URequestService]
})


export class RequestDetailPageModule {}
