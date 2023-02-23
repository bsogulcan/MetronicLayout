import {NgModule, APP_INITIALIZER, LOCALE_ID} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {RootComponent} from "./root.component";
import {RootRoutingModule} from "./root-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RootRoutingModule,
  ],
  declarations: [RootComponent],
  providers: [],
  bootstrap: [RootComponent],
  exports: []
})
export class RootModule {
}
