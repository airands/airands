import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ReceiptsPage} from './receipts.page';
import {RouterModule} from "@angular/router";
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ExploreContainerComponentModule,
        RouterModule.forChild([{ path: '', component: ReceiptsPage }]),
    ],
    declarations: [ReceiptsPage]
})
export class ReceiptsPageModule {
}
