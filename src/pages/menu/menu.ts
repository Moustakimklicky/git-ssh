import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WpApiService } from '../../service/wpapi.service';
import{ Plat } from '../plat/plat';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class Menu {
  menus: any;
  idplat:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,private  wpapiservice:WpApiService) {
    this.wpapiservice.getmenu().then(menuFetched=>{
      this.menus = menuFetched;
      console.log(this.menus);
    })
    this.idplat=this.navParams.get('idplat');
    console.log(this.idplat);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu');
    
  }
  

}
