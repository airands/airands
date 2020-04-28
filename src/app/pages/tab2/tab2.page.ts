import {Component} from '@angular/core';
import {Order, OrderItem} from "../../interfaces/order";

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

    constructor() {
    }

    order: Order = {
        storeName: '',
        items: [],
    };

    activeIndex: number = -1;

    public addItem(): void {
        this.order.items.push({
            name: "",
            quantity: 1,
        });
        this.activeIndex = this.lastIndex;
    }

    public handleClick(index): void {
        if (index < this.lastIndex && !Boolean(this.orderItems[this.lastIndex].name)) {
            this.orderItems.pop();
        }

        this.activeIndex = index;
    }

    public isActive(index: number) {
        return this.activeIndex === index;
    }

    get orderItems(): OrderItem[] {
        return this.order.items;
    }

    get lastIndex(): number {
        return this.orderItems.length - 1;
    }

}
