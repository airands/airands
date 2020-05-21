import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardButtonComponent} from "../../components/buttons/card-button/card-button.component";
import {BasicInputComponent} from "../../components/inputs/basic-input/basic-input.component";
import {InputDisplayComponent} from "../../components/inputs/input-display/input-display.component";
import {UserAvatarComponent} from "../../components/user-avatar/user-avatar.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {AppButtonComponent} from "../../components/buttons/app-button/app-button.component";


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ],
    declarations: [
        CardButtonComponent,
        BasicInputComponent,
        InputDisplayComponent,
        UserAvatarComponent,
        AppButtonComponent,
    ],
    exports: [
        CardButtonComponent,
        BasicInputComponent,
        InputDisplayComponent,
        UserAvatarComponent,
        AppButtonComponent,
    ],
})
export class SharedModule {
}
