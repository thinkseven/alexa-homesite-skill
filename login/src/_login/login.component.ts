import { Component, OnInit } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';
import { oauth2, AlexaContext } from '../_models/oauth';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  alexaContext: AlexaContext;

  constructor(private authenticationService: AuthenticationService, private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    let params = new URLSearchParams(window.location.search);
    let state = params.get("state") !== null ? params.get("state") : params.get("?state");
    let redirect_uri = params.get("redirect_uri") !== null ? params.get("redirect_uri") : params.get("?redirect_uri");
    this.alexaContext = new AlexaContext(state, redirect_uri);
  }

  login() {

    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
      data => {
        console.log(data);
        this.loading = false;
        this.alexaContext.updateOAuth(data);
        window.location.href = this.alexaContext.getRedirectUrl();
      },
      error => {
        console.log(error);
        this.alertService.error("login failed. please try again!!");
        this.loading = false;
      });

  }
}
