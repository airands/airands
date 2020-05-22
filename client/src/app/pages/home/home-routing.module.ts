import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const defaultRedirect = 'my-orders';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'order-history',
        loadChildren: () => import('./pages/order-history/order-history.module').then( m => m.OrderHistoryPageModule)
      },
      {
        path: 'my-orders',
        loadChildren: () => import('./pages/my-orders/my-orders.module').then( m => m.MyOrdersPageModule)
      },
      {
        path: 'my-account',
        loadChildren: () => import('./pages/my-account/my-account.module').then( m => m.MyAccountPageModule)
      },
      {
        path: '',
        redirectTo: '/home/' + defaultRedirect,
        pathMatch: 'full'
      },
    ]
  },
  {
    path: '',
    redirectTo: '/home/' + defaultRedirect,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
