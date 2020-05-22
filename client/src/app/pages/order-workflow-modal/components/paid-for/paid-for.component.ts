import {Component, OnInit} from '@angular/core';
import {UnsupportedComponent} from "../unsupported/unsupported.component";
import {OrderLocationComponent} from "../order-location/order-location.component";

@Component({
    selector: 'app-paid-for',
    templateUrl: './paid-for.component.html',
    styleUrls: ['./paid-for.component.scss'],
})
export class PaidForComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    goPaid() {
        this.modalNav().push(OrderLocationComponent);
    }

    goNotPaid() {
        this.modalNav().push(UnsupportedComponent);
    }

    modalNav(): HTMLIonNavElement {
        return document.querySelector('ion-nav') as HTMLIonNavElement;
    }

}
