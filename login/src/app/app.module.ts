import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AlertService } from "../_services/alert.service";
import { AuthenticationService } from "../_services/authentication.service";
import { AlertComponent } from '../_directives/alert.component';
import { LoginComponent } from '../_login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [AuthenticationService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
