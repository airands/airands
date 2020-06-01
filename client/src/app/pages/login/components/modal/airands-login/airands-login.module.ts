import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {AirandsLoginComponent} from "./airands-login.component";
import {LoginComponent} from "./components/login/login.component";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {IonicModule} from "@ionic/angular";
import {SharedModule} from "../../../../../modules/shared/shared.module";
import {SignUpComponent} from "./components/sign-up/sign-up.component";

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
  ],
  declarations: [
    AirandsLoginComponent,
    LoginComponent,
    SignUpComponent,
  ],
  entryComponents: [
    AirandsLoginComponent
  ],
  exports: [
  ],
})
export class AirandsLoginModule {
}
