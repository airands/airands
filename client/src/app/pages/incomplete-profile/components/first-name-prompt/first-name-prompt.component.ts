import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {IonInput, NavController} from "@ionic/angular";
import {ProfileService} from "../../../../services/user/profile.service";

@Component({
    selector: 'app-name-prompt',
    templateUrl: './first-name-prompt.component.html',
    styleUrls: ['./first-name-prompt.component.scss'],
})
export class FirstNamePromptComponent implements AfterViewInit {

    firstName: string = "";

    @ViewChild(IonInput, {static: false}) input: IonInput;

    constructor(
        private navController: NavController,
        private profileService: ProfileService,
    ) {
    }

    ngAfterViewInit() {
        this.firstName = this.profileService.firstName;
    }

    ionViewDidEnter(): void {
        this.input.setFocus();
    }

    goNext() {
        if (this.canSubmit) {
            this.profileService.setFirstName(this.firstName);
            this.navController.navigateForward(['/incomplete/last-name']);
        }
    }

    get canSubmit(): boolean {
        return Boolean(this.firstName);
    }

}
