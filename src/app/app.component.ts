import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeAudio } from '@ionic-native/native-audio';


import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, nativeAudio: NativeAudio) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      let audio = {
        hail: {
          id: '1',
          path: 'assets/audio/hail_hail1.mp3',
        },
        drink: {
          id: '2',
          path: 'assets/audio/drink_it_in_maan1.mp3',
        },
        nah: {
          id: '3',
          path: 'assets/audio/nah_man.mp3',
        },
        capiche: {
          id: '4',
          path: 'assets/audio/capiche1.mp3',
        },
        fact: {
          id: '5',
          path: 'assets/audio/fact_of_life.mp3',
        },
        deplorable: {
          id: '6',
          path: 'assets/audio/deplorable1.mp3',
        },
        schucky: {
          id: '7',
          path: 'assets/audio/schucky_ducky1.mp3',
        },
        untold: {
          id: '8',
          path: 'assets/audio/doing_untold1.mp3',
        }
      };

      // preload audio files
      nativeAudio.preloadSimple(audio.nah.id, audio.nah.path);
      nativeAudio.preloadSimple(audio.fact.id, audio.fact.path);
      nativeAudio.preloadSimple(audio.drink.id, audio.drink.path);
      nativeAudio.preloadSimple(audio.hail.id, audio.hail.path);
      nativeAudio.preloadSimple(audio.capiche.id, audio.capiche.path);
      nativeAudio.preloadSimple(audio.deplorable.id, audio.deplorable.path);
      nativeAudio.preloadSimple(audio.schucky.id, audio.schucky.path);
      nativeAudio.preloadSimple(audio.untold.id, audio.untold.path);
    });
  }
}
