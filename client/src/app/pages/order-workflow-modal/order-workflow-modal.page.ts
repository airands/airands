import { Component, OnInit } from '@angular/core';
import {OrderTypeComponent} from "./components/order-type/order-type.component";

@Component({
  selector: 'app-order-workflow-modal',
  templateUrl: './order-workflow-modal.page.html',
  styleUrls: ['./order-workflow-modal.page.scss'],
})
export class OrderWorkflowModalPage implements OnInit {

  root = OrderTypeComponent;

  constructor() { }

  ngOnInit() {
  }

}
