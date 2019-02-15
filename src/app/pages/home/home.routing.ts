import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, PathLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../../guards/auth.guard";
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { ParentComponent } from "./dashboard/parent/parent.component";
import { CollectionComponent } from "./collection/collection.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    children: [
      { path: 'main', component: MainComponent },
      { path: 'dashboard', component: DashboardComponent, },
      { path: 'parent/:id', component: ParentComponent },
      { path: 'collection', component: CollectionComponent },
      { path: 'user-profile', component: UserProfileComponent },
      { path: 'table-list', component: TableListComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'icons', component: IconsComponent },
      { path: 'maps', component: MapsComponent },
      { path: 'notifications', component: NotificationsComponent },
      { path: 'upgrade', component: UpgradeComponent },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  exports: [
    RouterModule
  ],
})
export class HomeRoutingModule { }

