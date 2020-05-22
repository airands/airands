import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import AutocompleteOptions = google.maps.places.AutocompleteOptions;
import {NavController} from "@ionic/angular";
import {BasicInputComponent} from "../../../../components/inputs/basic-input/basic-input.component";
import {OrderDescriptionComponent} from "../order-description/order-description.component";
import {Plugins} from "@capacitor/core";

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

    constructor() {
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
            // place.address_components.forEach(this.handleAddressComponent.bind(this));
            inputEl.value = place.formatted_address;
        });
    }

    modalNav(): HTMLIonNavElement {
        return document.querySelector('ion-nav') as HTMLIonNavElement;
    }

}
