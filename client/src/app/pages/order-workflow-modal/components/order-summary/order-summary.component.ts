import {Component, OnInit} from '@angular/core';
import {NewOrderStore} from "../../../../store/orders/new-order.store";
import {OrdersService} from "../../../../../open_api";

@Component({
    selector: 'app-order-summary',
    templateUrl: './order-summary.component.html',
    styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {

    constructor(
        private newOrderStore: NewOrderStore,
        private ordersService: OrdersService,
    ) {
    }

    ngOnInit() {
    }

    goNext() {
        this.createOrder();
    }

    private async createOrder() {
        console.log('Creating order!', this.newOrderStore.newOrder);
        const order = await this.ordersService.createOrder(this.newOrderStore.newOrder).toPromise();
        console.log('Order Created!', order);
    }

}
