import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NoAuthGuard} from "./guards/auth/no-auth.guard";
import {AuthGuard} from "./guards/auth/auth.guard";
import {CompleteProfileGuard} from "./guards/profile/complete-profile.guard";
import {AllGuard} from "./guards/all.guard";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule),
        data: {guards: [AuthGuard, CompleteProfileGuard]},
        canActivate: [AllGuard],
    },
    {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule),
        canActivate: [NoAuthGuard],
    },
    // TODO: Re-implement incomplete profile guard
    // {
    //     path: 'incomplete',
    //     loadChildren: () => import('./pages/incomplete-profile/incomplete-profile.module').then(m => m.IncompleteProfilePageModule),
    //     data: {guards: [AuthGuard, IncompleteProfileGuard]},
    //     canActivate: [AllGuard],
    // },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
