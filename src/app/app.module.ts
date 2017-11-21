import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import{Desc} from '../pages/desc/desc';
import{Plat} from '../pages/plat/plat';
import{Menu} from '../pages/menu/menu';
import { WpApiService } from '../service/wpapi.service';
import { HttpModule } from '@angular/http';
import { Actualite } from '../pages/actualite/actualite';
import { Locationpage } from '../pages/locationpage/locationpage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Desc,
    Plat,
    Menu,
    Actualite,
    Locationpage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Desc,
    Plat,
    Menu,
    Actualite,
    Locationpage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    WpApiService,    
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
