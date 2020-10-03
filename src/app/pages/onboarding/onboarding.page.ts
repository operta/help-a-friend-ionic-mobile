import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
})
export class OnboardingPage implements OnInit {
  @ViewChild('slidess',{static:true}) slides: IonSlides;
  showNextButton:boolean = false;
  animate:any = 'none';
  constructor(private navCtrl:NavController) { }

  ngOnInit() {
  }

  Skip()
  {
    this.navCtrl.navigateRoot('login');
  }
    //
    // private setLanguage() {
    //     this.translate.setDefaultLang('en');
    //
    //     let browLang = window.navigator['userLanguage'] || window.navigator.language;
    //     if (browLang.indexOf('-') !== -1) {
    //         browLang = browLang.split('-')[0];
    //     }
    //     this.browserLangKey = browLang;
    //     translate.use(this.browserLangKey);
    // }


  onSlideChange() {
    this.slides.getActiveIndex()
      .then(index => {
        console.log(index);
        if(index ==2)
        { 
          this.showNextButton = true;
          this.animate = 'animate__animated animate__fadeInUp';
          
        }

        else
        {
          this.showNextButton = false;
          this.animate = 'none';
        }

      })
  }


 

}
