import {Component, OnInit, ViewChild} from '@angular/core';
import {OrderSummaryComponent} from "../order-summary/order-summary.component";
import {NewOrderStore} from "../../../../../store/orders/new-order.store";
import {BasicInputComponent} from "../../../../inputs/basic-input/basic-input.component";

@Component({
    selector: 'app-order-description',
    templateUrl: './order-description.component.html',
    styleUrls: ['./order-description.component.scss'],
})
export class OrderDescriptionComponent implements OnInit {

    @ViewChild(BasicInputComponent, {static: false}) basicInput: BasicInputComponent;

    constructor(
        private newOrderStore: NewOrderStore,
    ) {
    }

    ngOnInit() {
    }

    goNext() {
        const orderDescription = this.basicInput.getInputElement().value;
        console.log(orderDescription);
        this.newOrderStore.setSummary(orderDescription);
        this.modalNav().push(OrderSummaryComponent);
    }

    modalNav(): HTMLIonNavElement {
        return document.querySelector('ion-nav') as HTMLIonNavElement;
    }

    get canSubmit(): boolean {
        return true;
        // return Boolean(this.orderDescription) && this.orderDescription.length > 2;
    }

}
