import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from "./guards/auth/auth.guard";
import {NoAuthGuard} from "./guards/auth/no-auth.guard";
import {AuthenticationService} from "./services/auth/authentication.service";
import {IonicStorageModule} from "@ionic/storage";
import {ApiModule, Configuration, ConfigurationParameters} from "../open_api";
import {AllGuard} from "./guards/all.guard";
import {LoginService} from "./services/auth/login.service";
import {FacebookService} from "./services/auth/facebook.service";
import {GoogleService} from "./services/auth/google.service";
import {AppleService} from "./services/auth/apple.service";
import {SharedModule} from "./modules/shared/shared.module";
import {NewOrderStore} from "./store/orders/new-order.store";
import {GoogleMapsModule} from "@angular/google-maps";

export function apiConfigFactory(): Configuration {
    const params: ConfigurationParameters = {
        withCredentials: true,
    }
    return new Configuration(params);
}

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        ApiModule.forRoot(apiConfigFactory),
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot(),
        SharedModule,
        GoogleMapsModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AuthGuard,
        NoAuthGuard,
        AllGuard,
        AuthenticationService,
        LoginService,
        FacebookService,
        GoogleService,
        AppleService,
        NewOrderStore,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
