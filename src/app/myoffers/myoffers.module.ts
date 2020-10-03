import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import {MyOffersPageRoutingModule} from './myoffers-routing.module';
import {MyOffersPage} from './myoffers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyOffersPageRoutingModule
  ],
  declarations: [MyOffersPage]
})
export class MyOffersPageModule {}
