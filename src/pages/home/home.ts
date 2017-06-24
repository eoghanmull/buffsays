import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { InfoModal } from '../modal/modal';
import { ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public nativeAudio: NativeAudio, public modalCtrl: ModalController) { }

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

 infoPop(){
     var modal = this.modalCtrl.create(InfoModal);
     modal.present().then( (data) => {
       console.log(data);
     }).catch((err)=> {
       console.log(err);
     })

     console.log("INFO WAS CLICKED");
  }

}

