

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ServicesModule } from "./services/services.module";
import { AppRoutingModule } from './app.routing';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { GuardsModule } from "./guards/guards.module";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
// import {  } from "";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    ServicesModule,
    GuardsModule,
    AppRoutingModule,
    PagesModule,
    
   
  ],
  providers: [GuardsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
