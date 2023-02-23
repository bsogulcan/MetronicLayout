import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
  ],
  imports: [
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
