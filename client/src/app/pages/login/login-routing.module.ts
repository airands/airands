import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SplashComponent} from "./components/splash/splash.component";
import {PhonePromptComponent} from "./components/phone-prompt/phone-prompt.component";
import {ConfirmationPromptComponent} from "./components/confirmation-prompt/confirmation-prompt.component";
import {AuthOptionsComponent} from "./components/auth-options/auth-options.component";

const routes: Routes = [
    {
        path: '',
        component: SplashComponent,
    },
    {
        path: 'auth',
        component: AuthOptionsComponent,
    },
    {
        path: 'phone',
        component: PhonePromptComponent,
    },
    {
        path: 'confirmation',
        component: ConfirmationPromptComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginPageRoutingModule {
}
