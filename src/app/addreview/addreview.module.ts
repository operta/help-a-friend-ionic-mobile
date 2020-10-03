import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddreviewPageRoutingModule } from './addreview-routing.module';

import { AddreviewPage } from './addreview.page';
import { RatingModule } from 'ng-starrating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingModule,
    AddreviewPageRoutingModule
  ],
  declarations: [AddreviewPage]
})
export class AddreviewPageModule {}
