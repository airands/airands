import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {IncompleteNameGuard} from "../../guards/profile/incomplete-name.guard";
import {IncompleteAddressGuard} from "../../guards/profile/incomplete-address.guard";

import {FirstNamePromptComponent} from "./components/first-name-prompt/first-name-prompt.component";
import {AddressPromptComponent} from "./components/address-prompt/address-prompt.component";
import {LastNamePromptComponent} from "./components/last-name-prompt/last-name-prompt.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'first-name',
        pathMatch: 'full',
    },
    {
        path: 'first-name',
        component: FirstNamePromptComponent,
        canActivate: [IncompleteNameGuard],
    },
    {
        path: 'last-name',
        component: LastNamePromptComponent,
        canActivate: [IncompleteNameGuard],
    },
    {
        path: 'address',
        component: AddressPromptComponent,
        canActivate: [IncompleteAddressGuard],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IncompleteProfilePageRoutingModule {
}
