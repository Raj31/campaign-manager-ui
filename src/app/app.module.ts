import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { LbdModule } from './lbd/lbd.module';
import { ImageUploadModule } from "angular2-image-upload";

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { TablesComponent } from './tables/tables.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { AccountComponent } from './account/account.component';
import { FinanceComponent } from './finance/finance.component';
import { DisplayAdComponent } from './display-ad/display-ad.component';
import { SerachAdComponent } from './serach-ad/serach-ad.component';
import { CampaignsComponent } from './campaigns/campaigns.component';
import { UpdateCampaignComponent } from './update-campaign/update-campaign.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    AccountComponent,
    FinanceComponent,
    DisplayAdComponent,
    SerachAdComponent,
    CampaignsComponent,
    UpdateCampaignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    ImageUploadModule.forRoot(),
    LbdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
