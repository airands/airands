import { Component, OnInit } from '@angular/core';
import {LoginComponent} from "./components/login/login.component";

@Component({
  selector: 'app-airands-login',
  templateUrl: './airands-login.component.html',
  styleUrls: ['./airands-login.component.scss'],
})
export class AirandsLoginComponent implements OnInit {

  root = LoginComponent

  constructor() { }

  ngOnInit() {}
}
