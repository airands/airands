import {Component, OnInit} from '@angular/core';
import {SignUpComponent} from "../sign-up/sign-up.component";
import {LoginService} from "../../../../../../../services/auth/login.service";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public email: string = '';
  public password: string = '';

  constructor(private loginService: LoginService,
              private router: Router,
              private modalController: ModalController) {}

  ngOnInit() {}

  public async login() {
    if (this.inputsValid()) {
      try {
        await this.loginService.loginAirands(this.email, this.password);
        await this.router.navigateByUrl("/home");
        await this.modalController.dismiss();
      }
      catch (errorResponse) {
        alert("BAD LOGIN, TODO BETTER THIS")
      }
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
