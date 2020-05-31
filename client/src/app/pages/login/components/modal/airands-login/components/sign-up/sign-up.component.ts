import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {

  public email: string = '';
  public password: string = '';
  public passwordConfirmation: string = '';

  constructor() { }

  ngOnInit() {}

  public singUp() {
    if (this.inputsValid()) {
      console.log("SINGUP");
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
