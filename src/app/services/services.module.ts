import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from "./admin.service";
import { AlertsService } from "@jaspero/ng2-alerts";
import { ParentService } from "./parent.service";
import {  AppConfig} from "../app.config";
import { AuthenticationService } from "./authentication.service";
import { ChildService } from "./child.service";
import { HelperService } from "./helper.service";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[AppConfig,AdminService,AlertsService,ChildService,HelperService,AuthenticationService, ParentService]
})
export class ServicesModule { }
