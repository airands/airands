import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardButtonComponent} from "../../components/buttons/card-button/card-button.component";
import {BasicInputComponent} from "../../components/inputs/basic-input/basic-input.component";
import {InputDisplayComponent} from "../../components/inputs/input-display/input-display.component";
import {UserAvatarComponent} from "../../components/user-avatar/user-avatar.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {AppButtonComponent} from "../../components/buttons/app-button/app-button.component";
import {WorkflowHeaderComponent} from "../../components/headers/workflow-header/workflow-header.component";
import {ModalLayoutComponent} from "../../components/layout/modal-layout/modal-layout.component";
import {ActiveOrderButtonComponent} from "../../components/buttons/active-order-button/active-order-button.component";


@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        CommonModule,
        IonicModule,
        FormsModule,
    ],
    declarations: [
        CardButtonComponent,
        ActiveOrderButtonComponent,
        BasicInputComponent,
        InputDisplayComponent,
        UserAvatarComponent,
        AppButtonComponent,
        WorkflowHeaderComponent,
        ModalLayoutComponent,
    ],
    exports: [
        CardButtonComponent,
        ActiveOrderButtonComponent,
        BasicInputComponent,
        InputDisplayComponent,
        UserAvatarComponent,
        AppButtonComponent,
        WorkflowHeaderComponent,
        ModalLayoutComponent,
    ],
})
export class SharedModule {
}
