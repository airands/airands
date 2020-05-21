import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Loader} from "@googlemaps/js-api-loader";
import {Plugins} from "@capacitor/core";
import {AirandsMapStyles} from "../map.styles";

@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.scss'],
})
export class MapViewComponent implements OnInit, AfterViewInit {

    @ViewChild('mapView', {static: false}) mapView: ElementRef<HTMLElement>;

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        this.initMap();
    }

    async initMap() {
        const coordinates = await Plugins.Geolocation.getCurrentPosition();

        const loader = new Loader({
            apiKey: 'AIzaSyCeiZFiiBHy1SmDCZmi2ZhPXF95VSQUZQ0',
            version: 'weekly',
            libraries: ['places'],
        });

        const userPosition = { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude };

        const mapOptions = {
            center: userPosition,
            zoom: 14,
            minZoom: 13,
            styles: AirandsMapStyles,
            disableDefaultUI: true,
            clickableIcons: false,
        };

        loader.load().then(() => {
            const map = new google.maps.Map(this.mapView.nativeElement, mapOptions);
            new google.maps.Marker({position: userPosition, map: map});
        });
    }


}
