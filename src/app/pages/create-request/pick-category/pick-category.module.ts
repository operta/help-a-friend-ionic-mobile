import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickCategoryPageRoutingModule } from './pick-category-routing.module';

import { PickCategoryPage } from './pick-category.page';
import {RequestCategoryService} from './request-category.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickCategoryPageRoutingModule
  ],
  declarations: [PickCategoryPage],
  providers: [
      RequestCategoryService
  ]
})
export class PickCategoryPageModule {}
