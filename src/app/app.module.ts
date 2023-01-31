import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Navigation/top-nav-bar/top-nav-bar.component';
import { SubNavBarComponent } from './Navigation/sub-nav-bar/sub-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SubNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
