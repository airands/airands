import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import AutocompleteOptions = google.maps.places.AutocompleteOptions;
import {NavController} from "@ionic/angular";
import {BasicInputComponent} from "../../../../inputs/basic-input/basic-input.component";
import {OrderDescriptionComponent} from "../order-description/order-description.component";
import {Plugins} from "@capacitor/core";
import {createLocationAddress, NewOrderStore} from "../../../../../store/orders/new-order.store";
import GeocoderAddressComponent = google.maps.GeocoderAddressComponent;
import PlaceResult = google.maps.places.PlaceResult;
import {LocationAddress} from "../../../../../../open_api";

@Component({
    selector: 'app-order-location',
    templateUrl: './order-location.component.html',
    styleUrls: ['./order-location.component.scss'],
})
export class OrderLocationComponent implements OnInit, AfterViewInit {

    @ViewChild(BasicInputComponent, {static: false}) input: BasicInputComponent;

    options: AutocompleteOptions = {
        componentRestrictions: {country: 'CA'},
    };

    constructor(private newOrderStore: NewOrderStore) {
    }

    ngOnInit() {
    }

    ionViewDidEnter(): void {
        this.input.getInputElement().focus();
    }

    ngAfterViewInit() {
        this.initializeAutocomplete();
    }

    goNext() {
        this.modalNav().push(OrderDescriptionComponent);
    }

    private async initializeAutocomplete() {
        const userLocation = await Plugins.Geolocation.getCurrentPosition();
        const {latitude, longitude} = userLocation.coords;

        this.options.bounds = new google.maps.LatLngBounds(
            new google.maps.LatLng(latitude, longitude),
            new google.maps.LatLng(latitude, longitude),
        )

        const inputEl = this.input.getInputElement();
        const autocomplete = new google.maps.places.Autocomplete(inputEl, this.options);
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            console.log(place);
            this.newOrderStore.setPickUpLocation(this.toLocationAddress(place));
            inputEl.value = place.formatted_address;
        });
    }

    modalNav(): HTMLIonNavElement {
        return document.querySelector('ion-nav') as HTMLIonNavElement;
    }

    private toLocationAddress(place: PlaceResult): LocationAddress {
        const locationAddress: LocationAddress = createLocationAddress();
        place.address_components.forEach(({long_name, short_name, types}: GeocoderAddressComponent) => {
            if (types.includes('street_number')) {
                locationAddress.street_number = long_name;
            } else if (types.includes('route')) {
                locationAddress.street_name = long_name;
            } else if (types.includes('locality')) {
                locationAddress.city = long_name;
            } else if (types.includes('administrative_area_level_1')) {
                locationAddress.province = short_name;
            } else if (types.includes('postal_code')) {
                locationAddress.postal_code = long_name;
            }
        });

        return locationAddress;
    }

    get canSubmit(): boolean {
        return this.newOrderStore.pickUpLocationComplete;
    }

}
