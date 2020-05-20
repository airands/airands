import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LoginPageRoutingModule} from './login-routing.module';

import {LoginPage} from './login.page';
import {SplashComponent} from "./components/splash/splash.component";
import {PhonePromptComponent} from "./components/phone-prompt/phone-prompt.component";
import {ConfirmationPromptComponent} from "./components/confirmation-prompt/confirmation-prompt.component";
import {AppButtonComponent} from "../../components/buttons/app-button/app-button.component";
import {AuthOptionsComponent} from "./components/auth-options/auth-options.component";
import {OrderTypeComponent} from "./components/getting-started/order-type/order-type.component";
import {WorkflowHeaderComponent} from "../../components/headers/workflow-header/workflow-header.component";
import {OrderTypeSelectionComponent} from "../../components/order-type-selection/order-type-selection.component";
import {PaidForComponent} from "./components/getting-started/paid-for/paid-for.component";
import {CardButtonComponent} from "../../components/buttons/card-button/card-button.component";
import {UnsupportedComponent} from "./components/getting-started/unsupported/unsupported.component";
import {BasicInputComponent} from "../../components/inputs/basic-input/basic-input.component";
import {OrderLocationComponent} from "./components/getting-started/order-location/order-location.component";
import {OrderDescriptionComponent} from "./components/getting-started/order-description/order-description.component";
import {DropoffLocationComponent} from "./components/getting-started/dropoff-location/dropoff-location.component";
import {OrderSummaryComponent} from "./components/getting-started/order-summary/order-summary.component";
import {InputDisplayComponent} from "../../components/inputs/input-display/input-display.component";
import {SharedModule} from "../../modules/shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        SharedModule,
    ],
    declarations: [
        LoginPage,
        SplashComponent,
        AppButtonComponent,
        PhonePromptComponent,
        ConfirmationPromptComponent,
        AuthOptionsComponent,
        OrderTypeComponent,
        WorkflowHeaderComponent,
        OrderTypeSelectionComponent,
        PaidForComponent,
        OrderLocationComponent,
        OrderDescriptionComponent,
        OrderSummaryComponent,
        DropoffLocationComponent,
        UnsupportedComponent,
    ],
})
export class LoginPageModule {
}
