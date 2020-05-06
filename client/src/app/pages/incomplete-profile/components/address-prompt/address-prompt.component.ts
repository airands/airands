import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {IonInput, NavController} from "@ionic/angular";
// @ts-ignore
import {} from '@types/googlemaps';
import {ProfileService} from "../../../../services/user/profile.service";
import {ProfileAddress} from "../../../../../open_api";
import GeocoderAddressComponent = google.maps.GeocoderAddressComponent;
import AutocompleteOptions = google.maps.places.AutocompleteOptions;

@Component({
    selector: 'app-address-prompt',
    templateUrl: './address-prompt.component.html',
    styleUrls: ['./address-prompt.component.scss'],
})
export class AddressPromptComponent implements AfterViewInit {

    @ViewChild(IonInput, {static: false}) input: IonInput;

    options: AutocompleteOptions = {
        types: ['address'],
        componentRestrictions: {country: 'CA'},
    };

    profileAddress: ProfileAddress = {
        street_number: null,
        street_name: null,
        unit_number: null,
        city: null,
        province: null,
        postal_code: null,
    };

    constructor(
        private profileService: ProfileService,
        private navController: NavController,
    ) {
    }

    ngAfterViewInit() {
        this.initializeAutocomplete();
    }

    ionViewDidEnter(): void {
        this.input.setFocus();
    }

    goNext() {
        this.profileService.setAddress(this.profileAddress);
        this.profileService.updateProfile()
            .then(() => {
                this.navController.navigateForward(['/tabs']);
            });
    }

    private initializeAutocomplete() {
        this.input.getInputElement().then((inputEl) => {
            const autocomplete = new google.maps.places.Autocomplete(inputEl, this.options);
            google.maps.event.addListener(autocomplete, 'place_changed', () => {
                const place = autocomplete.getPlace();
                place.address_components.forEach(this.handleAddressComponent.bind(this));
                this.input.value = place.formatted_address;
            });
        });
    }

    private handleAddressComponent({long_name, short_name, types}: GeocoderAddressComponent) {
        if (types.includes('street_number')) {
            this.profileAddress.street_number = long_name;
        } else if (types.includes('route')) {
            this.profileAddress.street_name = long_name;
        } else if (types.includes('locality')) {
            this.profileAddress.city = long_name;
        } else if (types.includes('administrative_area_level_1')) {
            this.profileAddress.province = short_name;
        } else if (types.includes('postal_code')) {
            this.profileAddress.postal_code = long_name;
        }
    }

}
