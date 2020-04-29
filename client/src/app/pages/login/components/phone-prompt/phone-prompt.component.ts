import {AfterViewInit, Component, ViewChild} from '@angular/core';
import PhoneNumber from 'awesome-phonenumber';
import {IonInput, NavController} from "@ionic/angular";

@Component({
    selector: 'app-phone-prompt',
    templateUrl: './phone-prompt.component.html',
    styleUrls: ['./phone-prompt.component.scss'],
})
export class PhonePromptComponent implements AfterViewInit {

    @ViewChild('ionInput', {static: false}) ionInput: IonInput;

    ayt = PhoneNumber.getAsYouType('CA');
    phoneNumber = "";

    constructor(private navCtrl: NavController) {
    }

    ngAfterViewInit(): void {
    }

    ionViewDidEnter(): void {
        this.ionInput.setFocus();
    }

    public goNext() {
        this.navCtrl.navigateForward('/tabs/order');
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
