import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.page.html',
  styleUrls: ['./wishlist.page.scss'],
})
export class WishlistPage implements OnInit {

  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  goHome()
  {
    this.navCtrl.navigateForward('home');
  }

}
