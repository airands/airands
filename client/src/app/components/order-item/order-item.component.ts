import {Component, Input, OnInit} from '@angular/core';
import {OrderItem} from "../../interfaces/order";

@Component({
    selector: 'app-order-item',
    templateUrl: './order-item.component.html',
    styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {

    private _active: boolean;

    @Input() item: OrderItem;

    constructor() {
    }

    ngOnInit() {
    }

    @Input()
    set active(value: boolean) {
        this._active = value;
    }

    get active(): boolean {
        return this._active;
    }

}
