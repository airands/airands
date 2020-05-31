import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {SignUpComponent} from "../sign-up/sign-up.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  ngOnInit() {}

  public login():void {
    if (this.inputsValid()) {
      console.log('LOGIN!');
    }
  }

  public toSignUp():void {
    this.modalNav.push(SignUpComponent);
  }

  public inputsValid() {
    return this.email.length > 0 && this.password.length >= 8;
  }

  get modalNav(): HTMLIonNavElement {
    return document.querySelector('ion-nav') as HTMLIonNavElement;
  }
}
