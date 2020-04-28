import {Component, Input, OnInit} from '@angular/core';
import {OrderItem} from "../../interfaces/order";

@Component({
    selector: 'app-item-field',
    templateUrl: './item-field.component.html',
    styleUrls: ['./item-field.component.scss'],
})
export class ItemFieldComponent implements OnInit {

    private _active: boolean;

    @Input() item: OrderItem;

    get active(): boolean {
        return this._active;
    }

    @Input()
    set active(active: boolean) {
        this._active = active;
    }

    // item: OrderItem = {
    //     name: '',
    //     quantity: 1,
    // };

    ngOnInit() {
    }

}
