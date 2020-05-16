import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-unsupported',
  templateUrl: './unsupported.component.html',
  styleUrls: ['./unsupported.component.scss'],
})
export class UnsupportedComponent implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {}

  goBack() {
    this.navController.navigateRoot(['/login'], {animationDirection: "back"});
  }

}
