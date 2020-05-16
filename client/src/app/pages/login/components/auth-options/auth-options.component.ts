import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {Plugins} from "@capacitor/core";

@Component({
  selector: 'app-auth-options',
  templateUrl: './auth-options.component.html',
  styleUrls: ['./auth-options.component.scss'],
})
export class AuthOptionsComponent implements OnInit {

  constructor(
      private navCtrl: NavController,
  ) {
  }

  ngOnInit() {
    Plugins.GoogleAuth.addListener('userChange', (user) => {
      console.log('userChange:', user);
    });
  }

  async signInGoogle() {
    const user = await Plugins.GoogleAuth.signIn();
    console.log('signIn:', user);
  }

  signInFb() {
  }

  signOut() {
  }

  public goNext() {
    this.navCtrl.navigateForward('/login/phone')
  }

}
