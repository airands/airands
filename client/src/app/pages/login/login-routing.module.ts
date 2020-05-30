import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SplashComponent} from "./components/splash/splash.component";

const routes: Routes = [
    {
        path: '',
        component: SplashComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LoginPageRoutingModule {
}
