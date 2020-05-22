import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyOrdersPageRoutingModule } from './my-orders-routing.module';

import { MyOrdersPage } from './my-orders.page';
import {MapViewComponent} from "../../../../components/maps/map-view/map-view.component";
import {SharedModule} from "../../../../modules/shared/shared.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MyOrdersPageRoutingModule,
        SharedModule
    ],
  declarations: [
      MyOrdersPage,
      MapViewComponent,
  ]
})
export class MyOrdersPageModule {}
