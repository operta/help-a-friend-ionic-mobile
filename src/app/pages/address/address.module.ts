import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddressPageRoutingModule } from './address-routing.module';

import { AddressPage } from './address.page';
import {AddressService} from './address.service';
import {HelpSharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    HelpSharedModule,
    AddressPageRoutingModule
  ],
  declarations: [AddressPage],
  providers: [AddressService]
})
export class AddressPageModule {}
