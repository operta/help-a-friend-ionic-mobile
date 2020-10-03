import {Component, OnInit} from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'home-outline'
    },
    {
      title: 'My Help Requests',
      url: 'myrequests',
      icon: 'egg-outline'
    },
    {
      title: 'My Help Offers',
      url: 'myoffers',
      icon: 'egg-outline'
    },
    {
      title: 'Profile',
      url: 'profile',
      icon: 'person-outline'
    },
    {
      title: 'Settings',
      url: 'settings',
      icon: 'settings-outline'
    },
    {
      title: 'Locations',
      url: 'address',
      icon: 'settings-outline'
    },
    {
      title: 'Logout',
      url: 'onboarding',
      icon: 'log-out-outline'
    }
  ];


  constructor(
      private platform: Platform,
      private splashScreen: SplashScreen,
      private statusBar: StatusBar,
      private storage: Storage
  ) {
    this.initializeApp();
  }

  private initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // TODO logout


  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }


}
