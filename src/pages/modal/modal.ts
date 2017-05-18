import { ModalController } from 'ionic-angular';
import {ViewController} from "ionic-angular/index";
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    selector: 'info-modal',
    templateUrl: 'modal.html'
})

export class InfoModal {
    constructor(private nav:NavController, private viewCtrl:ViewController) {

    }
    public contributors = [
            'Eoghan Mulcahy',
            'Ciarán O\'Mara'
        ];

    dismiss(){
      this.viewCtrl.dismiss({});
    }
}
