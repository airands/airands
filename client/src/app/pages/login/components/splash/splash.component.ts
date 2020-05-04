import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss'],
})
export class SplashComponent implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {}

  public goNext() {
    this.navCtrl.navigateForward('/login/phone')
  }
}
