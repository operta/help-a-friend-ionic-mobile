import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-myorders',
  templateUrl: './myoffers.page.html',
  styleUrls: ['./myoffers.page.scss'],
})
export class MyOffersPage implements OnInit {

  constructor(private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
  }

  goToChat() {
    this.router.navigateByUrl('chat');
  }

  goOrderDetails(otype:any)
  {
    this.setNavigation(otype,'orderdetails');
    console.log(otype);
    //go to order details occroding to type
  }

  setNavigation(param:string,url:string)  //navigate with parameters
  {
    let navigationExtras: NavigationExtras = {
      queryParams: {
          type: param
      }
    };
    
    this.navCtrl.navigateForward([url],navigationExtras);
  }


}
