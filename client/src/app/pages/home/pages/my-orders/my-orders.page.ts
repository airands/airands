import {Component, OnInit} from '@angular/core';
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {OrderWorkflowModalPage} from "../../../order-workflow-modal/order-workflow-modal.page";

@Component({
    selector: 'app-my-orders',
    templateUrl: './my-orders.page.html',
    styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

    constructor(
        private modalController: ModalController,
        private routerOutlet: IonRouterOutlet
    ) {
    }

    ngOnInit() {
    }

    async createOrder() {
        const modal = await this.modalController.create({
            component: OrderWorkflowModalPage,
        });
        return await modal.present();
    }

}
