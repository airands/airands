import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAccountPageRoutingModule } from './my-account-routing.module';

import { MyAccountPage } from './my-account.page';
import {SharedModule} from "../../../../modules/shared/shared.module";
import {UserAvatarComponent} from "../../../../components/user-avatar/user-avatar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAccountPageRoutingModule,
    SharedModule,
  ],
  declarations: [
      MyAccountPage,
  ],
})
export class MyAccountPageModule {}
