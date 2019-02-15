import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppConfig } from '../app.config';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http, private config: AppConfig) { }

    login(email: string, password: string) {
        return this.http.post(this.config.apiUrl + 'admin/authenticate', { email:email, password: password })
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let admin = response.json();
                if (admin && admin.token) {
                    // store admin details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentadmin', JSON.stringify(admin));
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentadmin');
    }
}