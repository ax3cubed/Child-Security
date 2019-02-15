import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GuardsModule } from "../../guards/guards.module";
import { ComponentsModule } from '../../components/components.module';
import { HomeRoutingModule } from './home.routing';
import { HomeComponent } from './home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UsersListComponent } from './users-list/users-list.component';
import { ParentComponent } from "./dashboard/parent/parent.component";
import { CollectionComponent } from './collection/collection.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PipesModule } from "../../pipes/pipes.module";
import { NgxQRCodeModule } from "@techiediaries/ngx-qrcode";

import {
  MatStepperModule,
  MatInputModule, MatButtonModule,
  MatCardModule, MatCheckboxModule,
  MatChipsModule, MatDatepickerModule,
  MatFormFieldModule, MatOptionModule,

  MatProgressBarModule, MatRadioModule,
  MatSnackBarModule,MatSlideToggleModule, MatSelectModule,

} from "@angular/material";
import { MainComponent } from './main/main.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    HomeRoutingModule,
    GuardsModule,
    FormsModule,
    ReactiveFormsModule,
    
    PipesModule,
    MatStepperModule,
    MatInputModule, MatButtonModule,
    MatCardModule, MatCheckboxModule,
    MatChipsModule, MatDatepickerModule,
    MatFormFieldModule, MatOptionModule,
    MatProgressBarModule, MatRadioModule,
    MatSnackBarModule,
    MatSelectModule,MatSlideToggleModule,
    NgxQRCodeModule
    
    
    
  ],
  declarations: [
    HomeComponent, 
    DashboardComponent, 
    UserProfileComponent, 
    TableListComponent, 
    TypographyComponent, 
    
    IconsComponent, 
    MapsComponent, 
    NotificationsComponent, 
    UpgradeComponent,
    UsersListComponent,
    ParentComponent,
    CollectionComponent,
    MainComponent,
  
],

})
export class HomeModule { }
