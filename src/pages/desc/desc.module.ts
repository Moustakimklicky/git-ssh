import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Desc } from './desc';

@NgModule({
  declarations: [
    Desc,
  ],
  imports: [
    IonicPageModule.forChild(Desc),
  ],
})
export class DescModule {}
