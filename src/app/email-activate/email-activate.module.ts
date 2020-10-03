import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmailActivatePageRoutingModule } from './email-activate-routing.module';

import { EmailActivatePage } from './email-activate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmailActivatePageRoutingModule
  ],
  declarations: [EmailActivatePage]
})
export class EmailActivatePageModule {}
