export interface OrderItem {
    name: string;
    quantity: number;
}

export interface Order {
    storeName: string;
    items: OrderItem[];
}