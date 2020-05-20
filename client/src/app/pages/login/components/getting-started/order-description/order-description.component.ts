import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-order-description',
  templateUrl: './order-description.component.html',
  styleUrls: ['./order-description.component.scss'],
})
export class OrderDescriptionComponent implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {}

  goNext() {
    this.navController.navigateForward(['/login/getting-started/order-summary']);
  }

}
