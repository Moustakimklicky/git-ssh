import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { WpApiService } from '../../service/wpapi.service';
import { Menu } from '../menu/menu';


/**
 * Generated class for the Plat page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-plat',
  templateUrl: 'plat.html',
})

export class Plat {
  idmenu: any;
  @ViewChild(Slides) slides: Slides;

  public image = [
    "../assets/fruit.jpg",
    "../assets/pizza.jpg",
    "../assets/sushi.jpg",
  ];
  mens: any;
 
  menus: any;
news:any;
idplat: number;
  constructor(public navCtrl: NavController, public navParams: NavParams,private  wpapiservice:WpApiService) {
    this.wpapiservice.get().then(newsFetched=>{
      this.news = newsFetched;
      console.log(this.news);
      this.wpapiservice.getmenu().then(newsFetched=>{
        this.menus = newsFetched;
        console.log(this.menus);
        console.log(this.menus[0].categories[0]); 
        console.log(this.news[0].id); 
         this.idplat=this.menus[0].categories[0];
         this.idmenu=this.news[0].id;
         for (var index = 0; index < this.news.length; index++) {
           var element = this.news[index];
           if(this.news[index].id=this.menus[index].categories[0]){
             console.log(this.menus[index])
           }
           
         }
     
      })

    })
    this.wpapiservice.getm().then(newsFetched=>{
      this.mens = newsFetched;
      console.log(this.mens);
     
     
    })
  }
 
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad Plat');
  }

  menu(idplat){
    this.navCtrl.push(Menu);
    //console.log(this.idplat);

  }
 
 
  next(){
    this.slides.slideNext();
  }
  goToSlide() {
    this.slides.slideTo(2, 500);
  }
  
}
