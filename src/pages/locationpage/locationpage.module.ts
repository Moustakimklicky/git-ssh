import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Locationpage } from './locationpage';

@NgModule({
  declarations: [
    Locationpage,
  ],
  imports: [
    IonicPageModule.forChild(Locationpage),
  ],
})
export class LocationpageModule {}
