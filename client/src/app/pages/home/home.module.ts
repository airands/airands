import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {HomePageRoutingModule} from './home-routing.module';

import {HomePage} from './home.page';
import {SharedModule} from "../../modules/shared/shared.module";
import {OrderWorkflowModalModule} from "../order-workflow-modal/order-workflow-modal.module";
import {OrderWorkflowModalPage} from "../order-workflow-modal/order-workflow-modal.page";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HomePageRoutingModule,
        SharedModule,
        OrderWorkflowModalModule,
    ],
    entryComponents: [OrderWorkflowModalPage],
    declarations: [ HomePage, OrderWorkflowModalPage ],
})
export class HomePageModule {
}
