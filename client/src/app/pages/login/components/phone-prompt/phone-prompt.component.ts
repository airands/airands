import {AfterViewInit, Component, ViewChild} from '@angular/core';
import PhoneNumber from 'awesome-phonenumber';
import {IonInput, NavController} from "@ionic/angular";
import {RegisterDto, UserService} from "../../../../../open_api";
import {NavigationExtras} from "@angular/router";
import {Storage} from "@ionic/storage";

@Component({
    selector: 'app-phone-prompt',
    templateUrl: './phone-prompt.component.html',
    styleUrls: [
        './phone-prompt.component.scss',
        '../../login.page.scss',
    ],
})
export class PhonePromptComponent implements AfterViewInit {

    @ViewChild('ionInput', {static: false}) ionInput: IonInput;

    ayt = PhoneNumber.getAsYouType('CA');
    phoneNumber = "";

    constructor(
        private navController: NavController,
        private userService: UserService,
        private storage: Storage,
    ) {
    }

    ngAfterViewInit(): void {
    }

    ionViewDidEnter(): void {
        this.ionInput.setFocus();
    }

    public goNext() {
        const registerDto: RegisterDto = {phone_number: this.phoneNumber};
        this.userService.sendConfirmation(registerDto).subscribe((response) => {
            this.storage.set('PHONE_NUMBER', response.phone_number).then(() => {
                this.navController.navigateForward(['/login/confirmation']);
            });
        });
        // this.authenticationService.login();
        // this.navCtrl.navigateForward('/tabs/order');
    }

    // TODO: Format phone input
    public handleInput(value: any) {
        if (value.inputType === "deleteContentBackward") {
            this.ayt.removeChar();
        } else if (value.inputType === "insertText") {
            this.ayt.addChar(value.data);
        }
    }

    get phoneFormatted(): string {
        return this.ayt.getPhoneNumber().getNumber('national');
    }

}
