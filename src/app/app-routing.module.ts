import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeLayoutComponent } from './Layouts/home-layout/home-layout.component';
import { PersonalInfoComponent } from './Layouts/personal-info/personal-info.component';
import { DataPrivacyComponent } from './Layouts/data-privacy/data-privacy.component';
import { SecurityComponent } from './Layouts/security/security.component';
import { PeopleSharingComponent } from './Layouts/people-sharing/people-sharing.component';
import { PaymentsSubscriptionsComponent } from './Layouts/payments-subscriptions/payments-subscriptions.component';
import { AboutComponent } from './Layouts/about/about.component';

const routes: Routes = [   
  {
  path: '',
  component: HomeLayoutComponent
 },
 {
  path: 'home',
  component: HomeLayoutComponent
 },
 {
  path: 'personal-info',
 component: PersonalInfoComponent
},
{
  path: 'data-privacy',
 component: DataPrivacyComponent
},
{
  path: 'security',
 component: SecurityComponent
},
{
  path: 'people-sharing',
 component: PeopleSharingComponent
},
{
  path: 'payments-subscriptions',
 component: PaymentsSubscriptionsComponent
},
{
  path: 'about',
 component: AboutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
