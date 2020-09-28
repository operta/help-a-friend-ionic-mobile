import { NgModule } from '@angular/core';
import { AddAddressPageRoutingModule } from './add-address-routing.module';
import { AddAddressPage } from './add-address.page';
import {HelpSharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    HelpSharedModule,
    AddAddressPageRoutingModule
  ],
  declarations: [AddAddressPage]
})
export class AddAddressPageModule {}
