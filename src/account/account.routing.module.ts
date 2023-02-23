import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AccountComponent} from "./account.component";
import {SignUpComponent} from "./sign-up/sign-up.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AccountComponent,
        children: [
          {path: 'login', component: LoginComponent},
          {path: 'sign-up', component: SignUpComponent},
        ]
      }
    ])
  ], exports: [RouterModule]
})
export class AccountRoutingModule {
}
