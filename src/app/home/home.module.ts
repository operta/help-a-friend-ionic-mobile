import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { RatingModule } from 'ng-starrating';
import {GethelpComponent} from './gethelp/gethelp.component';
import {OfferhelpComponent} from './offerhelp/offerhelp.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RatingModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, GethelpComponent, OfferhelpComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
