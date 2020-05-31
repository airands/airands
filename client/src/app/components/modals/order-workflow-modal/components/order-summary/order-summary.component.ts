import {Component, OnInit} from '@angular/core';
import {NewOrderStore} from "../../../../../store/orders/new-order.store";
import {LocationAddress, NewOrder, OrdersService} from "../../../../../../open_api";
import {AlertController, LoadingController, ModalController, ToastController} from "@ionic/angular";

@Component({
    selector: 'app-order-summary',
    templateUrl: './order-summary.component.html',
    styleUrls: ['./order-summary.component.scss'],
})
export class OrderSummaryComponent implements OnInit {

    constructor(
        private newOrderStore: NewOrderStore,
        private ordersService: OrdersService,
        private alertController: AlertController,
        private loadingController: LoadingController,
        private toastController: ToastController,
        private modalController: ModalController,
    ) {
    }

    order: NewOrder;

    ngOnInit() {
        this.order = this.newOrderStore.newOrder;
    }

    async placeOrder() {
        const loader = await this.loadingController.create({
            message: 'Placing your order',
        });
        await loader.present();

        try {
            const order = await this.ordersService.createOrder(this.newOrderStore.newOrder).toPromise();
            await loader.dismiss();
            const toast = await this.toastController.create({
                message: "Your order has been placed!",
                duration: 3000,
            });
            await toast.present();
            await this.modalController.dismiss();
            console.log('Order Created!', order);
        } catch (error) {
            await loader.dismiss();
            const alert = await this.alertController.create({
                header: 'An Error Occurred',
                subHeader: JSON.stringify(error),
                buttons: ['Dismiss'],
            });
            await alert.present();
        }
    }

    async saveOrder() {
        const alert = await this.alertController.create({
            header: 'TODO',
            buttons: ['Dismiss'],
        });
        await alert.present();
    }

    get streetAddress(): string {
        const {street_number, street_name, unit_number} = this.pickUp;
        const street = `${street_number} ${street_name}`;
        return unit_number ? `${unit_number}-${street}` : street;
    }

    get fullAddress(): string {
        const {streetAddress} = this;
        const {city, province, postal_code} = this.pickUp;
        return `${streetAddress}\n${city}, ${province} ${postal_code}`;
    }

    get pickUp(): LocationAddress {
        return this.order.locations.pick_up;
    }

    get dropOff(): LocationAddress {
        return this.order.locations.drop_off;
    }

}
