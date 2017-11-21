import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Desc } from '../desc/desc';
import { Plat } from '../plat/plat';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  desc(){
    this.navCtrl.setRoot(Desc);
  }
  plat(){
    this.navCtrl.setRoot(Plat);
  }
 
}
