import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { SingleComponent } from './single/single.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SingleComponent
  ],
  imports: [
    BrowserModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
