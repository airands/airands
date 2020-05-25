import {Component, OnInit} from '@angular/core';
import {PaidForComponent} from "../paid-for/paid-for.component";
import {NewOrderStore} from "../../../../store/orders/new-order.store";
import {OrderType} from "../../../../../open_api";

@Component({
    selector: 'app-order-type',
    templateUrl: './order-type.component.html',
    styleUrls: ['./order-type.component.scss'],
})
export class OrderTypeComponent implements OnInit {

    constructor(private newOrderStore: NewOrderStore) {
    }

    ngOnInit() {
    }

    goCommercial() {
        this.newOrderStore.setOrderType(OrderType.CommercialPickUp);
        this.modalNav().push(PaidForComponent);
    }

    goPrivate() {
        this.newOrderStore.setOrderType(OrderType.PrivatePickUp);
        this.modalNav().push(PaidForComponent);
    }

    modalNav(): HTMLIonNavElement {
        return document.querySelector('ion-nav') as HTMLIonNavElement;
    }

}
