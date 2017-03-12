import { Component, OnInit } from '@angular/core';
import { AlertService } from '../_services/alert.service';
import { AuthenticationService } from '../_services/authentication.service';

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
        // redirect to redirectionurl
      },
      error => {
        console.log(error);
        this.alertService.error("login failed. please try again!!");
        this.loading = false;
      });

  }
}
