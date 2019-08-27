import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalldrPage } from './calldr';

@NgModule({
  declarations: [
    CalldrPage,
  ],
  imports: [
    IonicPageModule.forChild(CalldrPage),
  ],
})
export class CalldrPageModule {}
