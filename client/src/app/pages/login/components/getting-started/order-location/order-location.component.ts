import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import AutocompleteOptions = google.maps.places.AutocompleteOptions;
import {BasicInputComponent} from "../../../../../components/inputs/basic-input/basic-input.component";
import {NavController} from "@ionic/angular";

@Component({
    selector: 'app-order-location',
    templateUrl: './order-location.component.html',
    styleUrls: ['./order-location.component.scss'],
})
export class OrderLocationComponent implements OnInit, AfterViewInit {

    @ViewChild(BasicInputComponent, {static: false}) input: BasicInputComponent;

    options: AutocompleteOptions = {
        types: ['address'],
        componentRestrictions: {country: 'CA'},
    };

    constructor(private navController: NavController) {
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
        this.navController.navigateForward(['/login/getting-started/order-description']);
    }

    private initializeAutocomplete() {
        const inputEl = this.input.getInputElement();
        const autocomplete = new google.maps.places.Autocomplete(inputEl, this.options);
        google.maps.event.addListener(autocomplete, 'place_changed', () => {
            const place = autocomplete.getPlace();
            console.log(place);
            // place.address_components.forEach(this.handleAddressComponent.bind(this));
            inputEl.value = place.formatted_address;
        });
    }

}
