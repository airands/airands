import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {PaidForComponent} from "../paid-for/paid-for.component";

@Component({
    selector: 'app-order-type',
    templateUrl: './order-type.component.html',
    styleUrls: ['./order-type.component.scss'],
})
export class OrderTypeComponent implements OnInit {

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
    }

    goCommercial() {
        this.modalNav().push(PaidForComponent);
    }

    goPrivate() {
        this.modalNav().push(PaidForComponent);
    }

    modalNav(): HTMLIonNavElement {
        return document.querySelector('ion-nav') as HTMLIonNavElement;
    }

}
