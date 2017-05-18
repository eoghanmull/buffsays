import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { NativeAudio } from '@ionic-native/native-audio';


import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  // constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, nativeAudio: NativeAudio) {
  //   platform.ready().then(() => {
  //     // Okay, so the platform is ready and our plugins are available.
  //     // Here you can do any higher level native things you might need.
  //     statusBar.styleDefault();
  //     splashScreen.hide();

  //     let audio = {
  //       hail: {
  //         id: '1',
  //         path: '',
  //       },
  //       drink: {
  //         id: '2',
  //         path: 'assets/audio/drink_it_in_mammies.mp3',
  //       },
  //       nah: {
  //         id: '3',
  //         path: 'assets/audio/nah_man.mp3',
  //       },
  //       capiche: {
  //         id: '4',
  //         path: '',
  //       },
  //       fact: {
  //         id: '5',
  //         path: 'assets/audio/fact_of_life.mp3',
  //       },
  //       deletion: {
  //         id: '6',
  //         path: '',
  //       },
  //       schucky: {
  //         id: '7',
  //         path: '',
  //       },
  //       tantalising: {
  //         id: '8',
  //         path: '',
  //       }
  //     };

  //     // preload audio files
  //     nativeAudio.preloadSimple(audio.nah.id, audio.nah.path).then((data)=>{
  //       console.log("LOADED");
  //       console.log(data);  
  //     });

  //   });
  // }
}
