import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Plat } from './plat';

@NgModule({
  declarations: [
    Plat,
  ],
  imports: [
    IonicPageModule.forChild(Plat),
  ],
})
export class PlatModule {}
