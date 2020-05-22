import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";
import {OrderDescriptionComponent} from "../order-description/order-description.component";

@Component({
  selector: 'app-dropoff-location',
  templateUrl: './dropoff-location.component.html',
  styleUrls: ['./dropoff-location.component.scss'],
})
export class DropoffLocationComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  goNext() {
    this.modalNav().push(OrderDescriptionComponent);
  }

  modalNav(): HTMLIonNavElement {
    return document.querySelector('ion-nav') as HTMLIonNavElement;
  }

}
