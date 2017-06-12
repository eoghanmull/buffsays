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
    this.nativeAudio.play('3');
  }

  factOfLife() {
    this.nativeAudio.play('5');
  }

  soakItIn() {
    this.nativeAudio.play('2');
  }

  hailHail(){
    this.nativeAudio.play('1');
  }

  capiche(){
    this.nativeAudio.play('4');
  }

  fact(){
    this.nativeAudio.play('5');
  }

  deplorable(){
    this.nativeAudio.play('6');
  }

  schucky(){
    this.nativeAudio.play('7');
  }

  untold(){
    this.nativeAudio.play('8');
  }



}
