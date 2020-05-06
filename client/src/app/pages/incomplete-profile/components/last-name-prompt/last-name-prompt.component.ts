import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {IonInput, NavController} from "@ionic/angular";
import {ProfileService} from "../../../../services/user/profile.service";
import {AuthenticationService} from "../../../../services/auth/authentication.service";

@Component({
    selector: 'app-last-name-prompt',
    templateUrl: './last-name-prompt.component.html',
    styleUrls: ['./last-name-prompt.component.scss'],
})
export class LastNamePromptComponent implements AfterViewInit {

    lastName: string = "";

    @ViewChild(IonInput, {static: false}) input: IonInput;

    constructor(
        private navController: NavController,
        private profileService: ProfileService,
        private authenticationService: AuthenticationService,
    ) {
    }

    ngAfterViewInit() {
        this.lastName = this.profileService.lastName;
    }

    ionViewDidEnter(): void {
        this.input.setFocus();
    }

    logout() {
        this.profileService.clean();
        this.authenticationService.logout();
    }

    goNext() {
        if (this.canSubmit) {
            this.profileService.setLastName(this.lastName);
            this.profileService.updateProfile().then(() => {
                this.navController.navigateForward(['/incomplete/address']);
            });
        }
    }

    get canSubmit(): boolean {
        return Boolean(this.lastName);
    }

    get firstName(): string {
        return this.profileService.firstName;
    }

}
