import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {AppComponent} from "./app.component";

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: AppComponent,
        children: [
          {path: 'about', component: AboutComponent},
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
