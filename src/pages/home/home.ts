import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public nativeAudio: NativeAudio) { }

  //Function for various audio clips
  //this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
  nahMan() {
    this.nativeAudio.play('3', () => console.log('uniqueId3 is done playing'));
  }

}
