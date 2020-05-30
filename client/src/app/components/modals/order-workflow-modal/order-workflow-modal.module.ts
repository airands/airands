import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {SharedModule} from "../../../modules/shared/shared.module";
import {OrderTypeComponent} from "./components/order-type/order-type.component";
import {PaidForComponent} from "./components/paid-for/paid-for.component";
import {OrderLocationComponent} from "./components/order-location/order-location.component";
import {OrderDescriptionComponent} from "./components/order-description/order-description.component";
import {OrderSummaryComponent} from "./components/order-summary/order-summary.component";
import {DropoffLocationComponent} from "./components/dropoff-location/dropoff-location.component";
import {UnsupportedComponent} from "./components/unsupported/unsupported.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
    ],
    declarations: [
        OrderTypeComponent,
        PaidForComponent,
        OrderLocationComponent,
        OrderDescriptionComponent,
        OrderSummaryComponent,
        DropoffLocationComponent,
        UnsupportedComponent,
    ],
    entryComponents: [
        OrderTypeComponent,
        PaidForComponent,
        OrderLocationComponent,
        OrderDescriptionComponent,
        OrderSummaryComponent,
        DropoffLocationComponent,
        UnsupportedComponent,
    ],
    exports: [
    ],
})
export class OrderWorkflowModalModule {
}
