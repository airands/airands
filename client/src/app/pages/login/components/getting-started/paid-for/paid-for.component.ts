import { Component, OnInit } from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
  selector: 'app-paid-for',
  templateUrl: './paid-for.component.html',
  styleUrls: ['./paid-for.component.scss'],
})
export class PaidForComponent implements OnInit {

  constructor(private navController: NavController) { }

  ngOnInit() {}

  goPaid() {
    this.navController.navigateForward(['/login/getting-started/pick-up-location']);
  }

  goNotPaid() {
    this.navController.navigateForward(['/login/getting-started/not-supported']);
  }

}
