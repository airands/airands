import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {OrderPageRoutingModule} from './order-routing.module';

import {OrderPage} from './order.page';
import {ItemFieldComponent} from "../../components/item-field/item-field.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        OrderPageRoutingModule
    ],
    declarations: [OrderPage, ItemFieldComponent]
})
export class OrderPageModule {
}
