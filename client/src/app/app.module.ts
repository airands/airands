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
import {ProfileService} from "./services/user/profile.service";
import {AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule} from "angularx-social-login";

export function apiConfigFactory(): Configuration {
    const params: ConfigurationParameters = {
        withCredentials: true,
    }
    return new Configuration(params);
}

const config = new AuthServiceConfig([
    {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('424350226564-jahvnim5fss1b13i9qrm6tam67p63582.apps.googleusercontent.com'),
    },
    {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('1009434502787454'),
    }
]);

export function provideConfig() {
    return config;
}

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        HttpClientModule,
        ApiModule.forRoot(apiConfigFactory),
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        IonicStorageModule.forRoot(),
        SocialLoginModule,
    ],
    providers: [
        StatusBar,
        SplashScreen,
        AuthGuard,
        NoAuthGuard,
        AllGuard,
        AuthenticationService,
        ProfileService,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        {provide: AuthServiceConfig, useFactory: provideConfig},
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
