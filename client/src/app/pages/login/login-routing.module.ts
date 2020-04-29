import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {LoginPage} from './login.page';
import {SplashComponent} from "./components/splash/splash.component";
import {PhonePromptComponent} from "./components/phone-prompt/phone-prompt.component";

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
                path: 'phone-prompt',
                component: PhonePromptComponent,
            },
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginPageRoutingModule {
}
