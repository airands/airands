import {OrderType} from "../../open_api";

export interface OrderItem {
    name: string;
    quantity: number;
    isChecked: boolean;
}

export interface Order {
    storeName: string;
    items: OrderItem[];
}
