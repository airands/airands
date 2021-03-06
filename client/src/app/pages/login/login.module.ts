import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LoginPageRoutingModule} from './login-routing.module';

import {LoginPage} from './login.page';
import {SplashComponent} from "./components/splash/splash.component";
import {OrderTypeSelectionComponent} from "../../components/order-type-selection/order-type-selection.component";
import {SharedModule} from "../../modules/shared/shared.module";
import {AirandsLoginModule} from "./components/modal/airands-login/airands-login.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule,
        SharedModule,
        AirandsLoginModule,
    ],
    declarations: [
        LoginPage,
        SplashComponent,
        OrderTypeSelectionComponent,
    ],
})
export class LoginPageModule {
}
