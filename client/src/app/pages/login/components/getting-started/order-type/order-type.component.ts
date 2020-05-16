import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-order-type',
  templateUrl: './order-type.component.html',
  styleUrls: ['./order-type.component.scss'],
})
export class OrderTypeComponent implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {}

  goCommercial() {
    this.navController.navigateForward('/login/getting-started/paid-for')
  }

  goPrivate() {
    this.navController.navigateForward('/login/getting-started/paid-for')
  }

}
