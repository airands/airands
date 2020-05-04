import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./services/auth/auth.guard";
import {NoAuthGuard} from "./services/auth/no-auth.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    canActivate: [NoAuthGuard],
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule),
    canActivate: [AuthGuard],
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
