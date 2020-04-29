import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccountPage } from './account.page';
import {ExploreContainerComponentModule} from "../explore-container/explore-container.module";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: AccountPage }]),
  ],
  declarations: [AccountPage]
})
export class AccountPageModule {}