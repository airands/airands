import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {AuthenticationService} from "./authentication.service";
import {NavController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(
      private authenticationService: AuthenticationService,
      private navController: NavController,
  ) { }

  canActivate(): boolean {
    if (this.authenticationService.isAuthenticated()) {
      this.navController.navigateForward(['/tabs']);
      return false;
    } else {
      return true;
    }
  }

}
