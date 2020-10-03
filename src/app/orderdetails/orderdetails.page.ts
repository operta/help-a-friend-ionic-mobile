import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.page.html',
  styleUrls: ['./orderdetails.page.scss'],
})
export class OrderdetailsPage implements OnInit {
type:any;
  constructor(private route: ActivatedRoute,private navCtrl:NavController) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.type = params["type"];
  });
  }


  goAddreview()
  {
    this.navCtrl.navigateForward('addreview');
  }

}
