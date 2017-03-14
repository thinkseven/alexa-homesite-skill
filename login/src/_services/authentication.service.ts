import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { oauth2 } from '../_models/oauth';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(email: string, password: string): Observable<oauth2> {
        return this.http.post('/api/pace/auth', { email: email, password: password })
            .map((response: Response) => response.json() as oauth2);
    }

    logout() {
        // expire oauth token
    }
}