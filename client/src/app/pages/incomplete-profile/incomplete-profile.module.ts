import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncompleteProfilePageRoutingModule } from './incomplete-profile-routing.module';

import { IncompleteProfilePage } from './incomplete-profile.page';
import {FirstNamePromptComponent} from "./components/first-name-prompt/first-name-prompt.component";
import {AddressPromptComponent} from "./components/address-prompt/address-prompt.component";
import {LastNamePromptComponent} from "./components/last-name-prompt/last-name-prompt.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncompleteProfilePageRoutingModule
  ],
  declarations: [IncompleteProfilePage, FirstNamePromptComponent, LastNamePromptComponent, AddressPromptComponent],
})
export class IncompleteProfilePageModule {}
