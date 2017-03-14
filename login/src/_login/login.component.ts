import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';
import { oauth2 } from '../_models/oauth';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string; //amazon return url

  constructor(private authenticationService: AuthenticationService, private alertService: AlertService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    //this.returnUrl = "";
  }

  login() {

    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
      data => {
        console.log(data);
        //https://layla.amazon.com/spa/skill/account-linking-status.html?vendorId=M354GXLOSXIRZ3
        //https://pitangui.amazon.com/spa/skill/account-linking-status.html?vendorId=M354GXLOSXIRZ3
        // redirect to redirectionurl
        this.loading = false;
      },
      error => {
        console.log(error);
        this.alertService.error("login failed. please try again!!");
        this.loading = false;
      });

  }
}
