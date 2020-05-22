import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-unsupported',
  templateUrl: './unsupported.component.html',
  styleUrls: ['./unsupported.component.scss'],
})
export class UnsupportedComponent implements OnInit {

  constructor(private modalController: ModalController) {
  }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

}
