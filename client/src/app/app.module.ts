import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from "./services/auth-guard.service";
import {AuthenticationService} from "./services/authentication.service";
import {IonicStorageModule} from "@ionic/storage";
import {ApiModule} from "../open_api";

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        HttpClientModule,
        ApiModule,
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot(),
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AuthGuard,
        AuthenticationService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
