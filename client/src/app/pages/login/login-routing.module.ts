import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SplashComponent} from "./components/splash/splash.component";
import {PhonePromptComponent} from "./components/phone-prompt/phone-prompt.component";
import {ConfirmationPromptComponent} from "./components/confirmation-prompt/confirmation-prompt.component";
import {AuthOptionsComponent} from "./components/auth-options/auth-options.component";
import {OrderTypeComponent} from "./components/getting-started/order-type/order-type.component";
import {PaidForComponent} from "./components/getting-started/paid-for/paid-for.component";
import {UnsupportedComponent} from "./components/getting-started/unsupported/unsupported.component";
import {OrderLocationComponent} from "./components/getting-started/order-location/order-location.component";

const routes: Routes = [
    {
        path: '',
        component: SplashComponent,
    },
    {
        path: 'getting-started',
        children: [
            {
                path: '',
                component: OrderTypeComponent,
            },
            {
                path: 'paid-for',
                component: PaidForComponent,
            },
            {
                path: 'pick-up-location',
                component: OrderLocationComponent,
            },
            {
                path: 'not-supported',
                component: UnsupportedComponent,
            },
        ],
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
