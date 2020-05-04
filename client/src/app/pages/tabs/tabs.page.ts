import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/auth/authentication.service";

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor(
      private authenticationService: AuthenticationService,
  ) {}

  ngOnInit() {
    this.authenticationService.verifyLogin();
  }

}
