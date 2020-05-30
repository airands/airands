import {Component, OnInit} from '@angular/core';
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {OrderWorkflowModalPage} from "../../../../components/modals/order-workflow-modal/order-workflow-modal.page";
import {Order, OrdersService} from "../../../../../open_api";

@Component({
    selector: 'app-my-orders',
    templateUrl: './my-orders.page.html',
    styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

    constructor(
        private modalController: ModalController,
        private routerOutlet: IonRouterOutlet,
        private ordersService: OrdersService,
    ) {
    }

    orders: Order[] = [];

    ngOnInit() {
        this.ordersService.getAllOrders().subscribe((orders) =>
        {
            this.orders = orders;
            console.log(this.orders);
        });
    }

    async createOrder() {
        const modal = await this.modalController.create({
            component: OrderWorkflowModalPage,
        });
        return await modal.present();
    }

}
