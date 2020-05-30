import {Injectable} from "@angular/core";
import {LocationAddress, NewOrder, OrdersService, OrderType} from "../../../open_api";

const emptyLocationAddress: LocationAddress = {
    street_number: '',
    street_name: null,
    unit_number: null,
    city: null,
    province: null,
    postal_code: null,
    location_name: null,
    location_type: null,
};

const emptyNewOrder: NewOrder = {
    order_type: null,
    order_description: '',
    locations: {
        pick_up: {...emptyLocationAddress},
        drop_off: null,
    },
}

export const createLocationAddress = function (): LocationAddress {
    return {...emptyLocationAddress};
}

@Injectable({
    providedIn: 'root'
})
export class NewOrderStore {

    private order: NewOrder = {...emptyNewOrder};

    constructor(
        private ordersService: OrdersService,
    ) {
    }

    clearNewOrder() {
        this.order = {...emptyNewOrder};
    }

    setOrderType(orderType: OrderType) {
        this.order.order_type = orderType;
    }

    setDescription(description: string) {
        this.order.order_description = description;
    }

    setPickUpLocation(location: LocationAddress) {
        this.order.locations.pick_up = location;
    }

    setDropOffLocation(location: LocationAddress) {
        this.order.locations.drop_off = location;
    }

    get newOrder(): NewOrder {
        return this.order;
    }

    get pickUpLocationComplete(): boolean {
        const {pick_up} = this.order.locations;
        return Boolean(pick_up.street_number) &&
            Boolean(pick_up.street_name) &&
            Boolean(pick_up.city) &&
            Boolean(pick_up.province) &&
            Boolean(pick_up.postal_code);
    }

}
