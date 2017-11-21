import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { WpApiService } from '../../service/wpapi.service';


/**
 * Generated class for the Desc page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-desc',
  templateUrl: 'desc.html',
})
export class Desc {
  @ViewChild(Slides) slides: Slides;
  SkipMsg:string;
  news:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Desc');
  }
  slideChanged(){
    if(this.slides.isEnd()){
      this.SkipMsg="thats right";
    }
    else{
      this.SkipMsg="Suivant";
    }
  }
  next(){
    this.slides.slideNext();
  }
  slider=[
    {
      title:"Klicky Votre Agence web",
      content:"klicky,agence web spécialiste dans la création des sites web dynamiques,fonctionnel,rebuste notre agence vous offres les meilleurs resultats qui répondent à vos attente et correspondes à vos besoins.",
      image:"assets/propo.jpg",
    },
    {
      title:" klicky vous offre des applications mobiles !",
      content:" Application mobile qui vous permettent de simplifier la vie et d'améliorer vos service",
      image:"assets/mob.jpg",
    },
    {
      title:"Agence klicky",
      content:"Notre agence  vous offre des produits finaux de qualité et de haute gamme,N'hésiter pas à ,nous contacter au 0707007474",
      image:"assets/klik.png ",
    },

    
  ]
}
