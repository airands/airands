import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Plugins} from "@capacitor/core";
import {AirandsMapStyles} from "../map.styles";
import {Order} from "../../../../open_api";
import {ModalController} from "@ionic/angular";

@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit, AfterViewInit {

    @ViewChild('mapView', {static: false}) mapView: ElementRef<HTMLElement>;
    @Input() order: Order;

    options: google.maps.MapOptions = null;

    dropOffMarker = null;
    pickUpMarker = null;

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
        console.log(this.order);
    }

    ngAfterViewInit() {
        this.initMap();
    }

    async closeMap() {
        await this.modalController.dismiss();
    }

    // TODO: Use @angular/google-maps
    async initMap() {
        // const coordinates = await Plugins.Geolocation.getCurrentPosition();
        //
        // const userPosition = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };

        const {pick_up} = this.order.locations;
        const pickUpLocation = { lat: parseFloat(pick_up.lat), lng: parseFloat(pick_up.lng) };

        this.pickUpMarker = {
            position: pickUpLocation,
            label: {
                color: 'white',
                text: 'Pick Up'
            },
            options: { animation: google.maps.Animation.DROP },
        };

        // TODO: Proper drop off location prompts/persistence
        // const {drop_off} = this.order.locations;
        // const dropOffLocation = { lat: parseFloat(drop_off.lat), lng: parseFloat(drop_off.lng) };
        // this.dropOffMarker = {
        //     position: dropOffLocation,
        //     label: {
        //         color: 'white', text: 'Drop Off',
        //     },
        //     options: { animation: google.maps.Animation.DROP },
        // };

        this.options = {
            center: pickUpLocation,
            zoom: 14,
            minZoom: 13,
            styles: AirandsMapStyles,
            disableDefaultUI: true,
            clickableIcons: false,
            backgroundColor: '#17263c',
        };
    }


}
