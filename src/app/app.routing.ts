import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {AccountComponent} from './account/account.component';
import { DisplayAdComponent } from './display-ad/display-ad.component';
import { SerachAdComponent } from './serach-ad/serach-ad.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { UpdateCampaignComponent } from './update-campaign/update-campaign.component';

const routes: Routes =[
    { path: 'dashboard',      component: HomeComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'account',        component: AccountComponent},
    { path: 'display-ad',        component: DisplayAdComponent},
    { path: 'search-ad',        component: SerachAdComponent},
    { path: 'campaigns',        component: CampaignsComponent},
    { path: 'updateCampaign',        component: UpdateCampaignComponent},
    { path: '',          redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
