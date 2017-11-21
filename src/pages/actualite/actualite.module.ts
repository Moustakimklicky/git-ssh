import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Actualite } from './actualite';

@NgModule({
  declarations: [
    Actualite,
  ],
  imports: [
    IonicPageModule.forChild(Actualite),
  ],
})
export class ActualiteModule {}
