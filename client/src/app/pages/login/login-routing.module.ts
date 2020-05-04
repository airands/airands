import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginPage} from './login.page';
import {SplashComponent} from "./components/splash/splash.component";
import {PhonePromptComponent} from "./components/phone-prompt/phone-prompt.component";
import {ConfirmationPromptComponent} from "./components/confirmation-prompt/confirmation-prompt.component";

const routes: Routes = [
    {
        path: '',
        component: LoginPage,
        children: [
            {
                path: '',
                component: SplashComponent,
            },
            {
                path: 'phone',
                component: PhonePromptComponent,
            },
            {
                path: 'confirmation',
                component: ConfirmationPromptComponent,
            }
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginPageRoutingModule {
}
