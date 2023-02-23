import {NgModule} from '@angular/core';
import {MMenuComponent} from "./components/m-menu/m-menu.component";


@NgModule({
  declarations: [
    MMenuComponent
  ],
  exports: [
    MMenuComponent,
  ]
})
export class SharedModule {
}
