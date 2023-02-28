import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavBarComponent } from './Navigation/top-nav-bar/top-nav-bar.component';
import { SideNavComponent } from './Navigation/side-nav/side-nav.component';
import { HeaderComponent } from './Components/header/header.component';
import { BodyComponent } from './Components/body/body.component';
import { HomeLayoutComponent } from './Layouts/home-layout/home-layout.component';
import { PersonalInfoComponent } from './Layouts/personal-info/personal-info.component';
import { DataPrivacyComponent } from './Layouts/data-privacy/data-privacy.component';
import { SecurityComponent } from './Layouts/security/security.component';
import { PeopleSharingComponent } from './Layouts/people-sharing/people-sharing.component';
import { PaymentsSubscriptionsComponent } from './Layouts/payments-subscriptions/payments-subscriptions.component';
import { AboutComponent } from './Layouts/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavBarComponent,
    SideNavComponent,
    HeaderComponent,
    BodyComponent,
    HomeLayoutComponent,
    PersonalInfoComponent,
    DataPrivacyComponent,
    SecurityComponent,
    PeopleSharingComponent,
    PaymentsSubscriptionsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
