import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-dropoff-location',
  templateUrl: './dropoff-location.component.html',
  styleUrls: ['./dropoff-location.component.scss'],
})
export class DropoffLocationComponent implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {}

  goNext() {

  }

}
