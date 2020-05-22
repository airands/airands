import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LoginPageRoutingModule} from './login-routing.module';

import {LoginPage} from './login.page';
import {SplashComponent} from "./components/splash/splash.component";
import {PhonePromptComponent} from "./components/phone-prompt/phone-prompt.component";
import {ConfirmationPromptComponent} from "./components/confirmation-prompt/confirmation-prompt.component";
import {AuthOptionsComponent} from "./components/auth-options/auth-options.component";
import {OrderTypeSelectionComponent} from "../../components/order-type-selection/order-type-selection.component";
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
        PhonePromptComponent,
        ConfirmationPromptComponent,
        AuthOptionsComponent,
        OrderTypeSelectionComponent,
    ],
})
export class LoginPageModule {
}
