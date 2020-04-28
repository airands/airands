import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Tab2Page} from './tab2.page';
import {ExploreContainerComponentModule} from '../explore-container/explore-container.module';

import {Tab2PageRoutingModule} from './tab2-routing.module';
import {ComponentsModule} from "../../components/components.module";
import {ItemFieldComponent} from "../../components/item-field/item-field.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ComponentsModule,
        ExploreContainerComponentModule,
        Tab2PageRoutingModule
    ],
    declarations: [Tab2Page, ItemFieldComponent]
})
export class Tab2PageModule {
}
