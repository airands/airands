import {Component, OnInit} from '@angular/core';
import {AlertController, IonRouterOutlet, ModalController} from "@ionic/angular";
import {OrderWorkflowModalPage} from "../../../../components/modals/order-workflow-modal/order-workflow-modal.page";
import {Order, OrdersService} from "../../../../../open_api";
import {MapViewComponent} from "../../../../components/maps/map-view/map-view.component";

@Component({
    selector: 'app-my-orders',
    templateUrl: './my-orders.page.html',
    styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {

    constructor(
        private routerOutlet: IonRouterOutlet,
        private ordersService: OrdersService,
        private modalController: ModalController,
        private alertController: AlertController,
    ) {
    }

    activeOrders: Order[] = [];

    ngOnInit() {
        this.fetchOrders();
    }

    fetchOrders() {
        this.ordersService.getAllOrders().subscribe((orders) =>
        {
            this.activeOrders = orders;
            console.log(this.activeOrders);
        });
    }

    async createOrder() {
        const modal = await this.modalController.create({
            component: OrderWorkflowModalPage,
        });
        modal.onWillDismiss().then(() => this.fetchOrders());
        return await modal.present();
    }

    async openOrder(order: Order) {
        // const alert = await this.alertController.create({
        //     header: 'TODO',
        //     subHeader: 'Open order settings & map view',
        //     buttons: ['Dismiss'],
        // });
        // await alert.present();
        const modal = await this.modalController.create({
            component: MapViewComponent,
            componentProps: {
                order,
            }
        });
        modal.onWillDismiss().then(() => this.fetchOrders());
        return await modal.present();
    }

    get hasOrders(): boolean {
        return this.activeOrders.length > 0;
    }

}
