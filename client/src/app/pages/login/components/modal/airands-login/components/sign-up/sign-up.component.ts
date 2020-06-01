import { Component, OnInit } from '@angular/core';
import {AccountsService, ErrorResponse} from "../../../../../../../../open_api";
import {ErrorCode} from "../../../../../../../../open_api/model/errorCode";
import {LoginService} from "../../../../../../../services/auth/login.service";
import {Router} from "@angular/router";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  public email: string = '';
  public password: string = '';
  public passwordConfirmation: string = '';

  constructor(private accountsService: AccountsService,
              private loginService: LoginService,
              private router: Router,
              private modalController: ModalController) {}

  ngOnInit() {}

  public async singUp() {
    if (this.inputsValid()) {
      try {
        let accountCreateHash = {email: this.email, password: this.password};
        await this.accountsService.createAccount(accountCreateHash).toPromise();
        await this.loginService.loginAirands(this.email, this.password);
        await this.router.navigateByUrl("/home");
        await this.modalController.dismiss();
      }
      catch (e) {
        let error = e.error as ErrorResponse
        if (error.code == ErrorCode.AccountExists) {
          alert("ACCOUNT EXISTS, TODO BETTER THIS");
        }
        else {
          throw e;
        }
      }

    }
  }

  public passwordsMatch() {
    return this.password === this.passwordConfirmation;
  }

  public inputsValid() {
    return this.passwordsMatch() &&
      this.password.length > 0 &&
      this.passwordConfirmation.length > 0 &&
      this.email.length > 0;
  }
}
