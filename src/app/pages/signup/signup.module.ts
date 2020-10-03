import { NgModule } from '@angular/core';
import { SignupPageRoutingModule } from './signup-routing.module';

import { SignupPage } from './signup.page';
import {HelpSharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    HelpSharedModule,
    SignupPageRoutingModule
  ],
  declarations: [SignupPage]
})
export class SignupPageModule {}
