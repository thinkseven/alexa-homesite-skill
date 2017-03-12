import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(email: string, password: string) {
        return this.http.post('https://paceapi.homesitep2.com/auth', JSON.stringify({ email: email, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let oauth2 = response.json();
                console.log(oauth2);
                if (oauth2 && oauth2.access_token && oauth2.token_type) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('access_token', JSON.stringify(oauth2.access_token));
                    localStorage.setItem('token_type', JSON.stringify(oauth2.token_type));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('access_token');
        localStorage.removeItem('token_type');
    }
}