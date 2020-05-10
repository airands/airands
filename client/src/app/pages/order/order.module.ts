import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OrderPageRoutingModule} from './order-routing.module';

import {OrderPage} from './order.page';
import {ItemFieldComponent} from "../../components/item-field/item-field.component";
import {OrderItemComponent} from "../../components/order-item/order-item.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderPageRoutingModule
    ],
    declarations: [OrderPage, ItemFieldComponent, OrderItemComponent]
})
export class OrderPageModule {
}
