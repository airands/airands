import {Component, Input, OnInit} from '@angular/core';
import {LocationAddress, Order, OrderType} from "../../../../open_api";

enum OrderStatus {
  Pending = 'pending',
  Enroute = 'enroute',
  Shopping = 'shopping',
  Delivered = 'delivered',
  Cancelled = 'cancelled',
}

@Component({
  selector: 'app-active-order-button',
  templateUrl: './active-order-button.component.html',
  styleUrls: ['./active-order-button.component.scss'],
})
export class ActiveOrderButtonComponent implements OnInit {

  @Input() order: Order;

  constructor() { }

  ngOnInit() {}

  get orderStatus(): OrderStatus {
    // TODO: Add concept of order status to orders
    return OrderStatus.Pending;
  }

  get pickUp(): LocationAddress {
    return this.order.locations.pick_up;
  }

  get pickUpStreet(): string {
    const {unit_number, street_number, street_name} = this.pickUp;
    const street = `${street_number} ${street_name}`;
    return unit_number ? `${unit_number}-${street}` : street;
  }

  get pickUpCity(): string {
    return `${this.pickUp.city}, ${this.pickUp.province}`;
  }

  get isCommercial(): boolean {
    return this.order.order_type === OrderType.CommercialPickUp;
  }

  get orderTypeUF(): string {
      switch (this.order.order_type) {
        case OrderType.PrivatePickUp:
          return 'Private';
        case OrderType.CommercialPickUp:
          return 'Commercial';
      }
  }

  get orderStatusUF(): string {
    switch (this.orderStatus) {
      case OrderStatus.Pending:
        return 'Pending';
      case OrderStatus.Shopping:
        return 'Shopping';
      case OrderStatus.Enroute:
        return 'Enroute';
      case OrderStatus.Delivered:
        return 'Delivered';
      case OrderStatus.Cancelled:
        return 'Cancelled';
    }
  }

}
