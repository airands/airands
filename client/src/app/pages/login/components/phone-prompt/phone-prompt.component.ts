import {AfterViewInit, Component, ViewChild} from '@angular/core';
import PhoneNumber from 'awesome-phonenumber';
import {IonInput, NavController} from "@ionic/angular";
import {RegisterDto, UserService} from "../../../../../open_api";
import {AuthenticationService} from "../../../../services/auth/authentication.service";

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
        private authenticationService: AuthenticationService,
    ) {
    }

    ngAfterViewInit(): void {
    }

    ionViewDidEnter(): void {
        this.ionInput.setFocus();
    }

    logout() {
        this.navController.pop();
    }

    goNext() {
        const registerDto: RegisterDto = {phone_number: this.phoneNumber};
        this.userService.sendConfirmation(registerDto).subscribe(({phone_number}) => {
            this.navController.navigateForward(
                ['/login/confirmation'],
                {
                    queryParams: { phone_number },
                },
            );
        });
    }

    // TODO: Format phone input
    handleInput(value: any) {
        if (value.inputType === "deleteContentBackward") {
            this.ayt.removeChar();
        } else if (value.inputType === "insertText") {
            this.ayt.addChar(value.data);
        }
    }

    get phoneFormatted(): string {
        return this.ayt.getPhoneNumber().getNumber('national');
    }

    get canSubmit(): boolean {
        return this.phoneNumber.length === 10;
    }

}
