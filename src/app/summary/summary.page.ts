import { SuccessmodalPage } from './../successmodal/successmodal.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }


  async Pay() 
  {
    const modal = await this.modalCtrl.create({
      component: SuccessmodalPage
    });
    return await modal.present();
  }

}
