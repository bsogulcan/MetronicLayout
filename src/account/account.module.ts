import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {AccountComponent} from './account.component';
import {AccountRoutingModule} from "./account.routing.module";
import {SignUpComponent} from "./sign-up/sign-up.component";

@NgModule({
  declarations: [
    AccountComponent,
    LoginComponent,
    SignUpComponent
  ],
  imports: [
    AccountRoutingModule,
  ],
  exports: [
    LoginComponent
  ],
  bootstrap: [AccountComponent]
})
export class AccountModule {
}
