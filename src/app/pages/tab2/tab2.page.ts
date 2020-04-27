import { Component } from '@angular/core';
import {Order, OrderItem} from "../../interfaces/order";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  order: Order = {
    storeName: '',
    items: [],
  };

  public addItem() {

  }

}
