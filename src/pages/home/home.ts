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

  //Function for various audio clips
  //this.nativeAudio.play('uniqueId1', () => console.log('uniqueId1 is done playing'));
  nahMan() {
    this.nativeAudio.play('3', () => console.log('uniqueId3 is done playing'));
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

