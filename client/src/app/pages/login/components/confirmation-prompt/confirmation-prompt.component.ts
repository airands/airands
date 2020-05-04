import {AfterViewInit, Component, QueryList, ViewChildren} from '@angular/core';
import {IonInput} from "@ionic/angular";
import {Storage} from "@ionic/storage";
import {ErrorDto, SessionService} from "../../../../../open_api";
import {AuthenticationService} from "../../../../services/authentication.service";

@Component({
    selector: 'app-confirmation-prompt',
    templateUrl: './confirmation-prompt.component.html',
    styleUrls: [
        './confirmation-prompt.component.scss',
        '../../login.page.scss',
    ],
})
export class ConfirmationPromptComponent implements AfterViewInit {

    @ViewChildren(IonInput) confirmationInputs: QueryList<IonInput>;

    phoneNumber: string;
    confirmationInputsArr: IonInput[];
    confirmationPinValues: string[] = ['', '', '', '', '', ''];

    error: ErrorDto;

    constructor(
        private sessionService: SessionService,
        private authenticationService: AuthenticationService,
        private storage: Storage,
    ) {
        this.storage.get('PHONE_NUMBER').then((value) => {
            this.phoneNumber = value;
        });
    }

    ngAfterViewInit(): void {
        this.confirmationInputsArr = this.confirmationInputs.toArray();
    }

    ionViewDidEnter(): void {
        this.confirmationInputs.first.setFocus();
    }

    submitConfirmation() {
        this.authenticationService.login({
            phone_number: this.phoneNumber,
            confirmation_pin: this.confirmationPin,
        }).catch((error) => this.error = error.error);
    }

    handleInput(index: number, event: CustomEvent) {
        const {inputType} = event.detail;

        if (inputType === "insertText" && index < this.confirmationInputsArr.length - 1) {
            this.confirmationInputsArr[index + 1].setFocus();
        }
    }

    handleKeydown(index: number, event: KeyboardEvent) {
        const inputs = this.getInputs(index);

        if (event.key === "Backspace") {
            if (!Boolean(inputs.current.value) && Boolean(inputs.prev)) {
                inputs.prev.setFocus();
            }
        }
    }

    getInputs(index: number): { prev: IonInput, current: IonInput, next: IonInput } {
        const response = {
            prev: null,
            current: this.confirmationInputsArr[index],
            next: null,
        }

        if (index - 1 >= 0) {
            response.prev = this.confirmationInputsArr[index - 1];
        }
        if (index + 1 < this.confirmationInputsArr.length) {
            response.next = this.confirmationInputsArr[index + 1];
        }

        return response;
    }

    get numInputs(): number {
        return this.confirmationPinValues.length;
    }

    get confirmationPin(): string {
        return this.confirmationPinValues.join('');
    }

}
