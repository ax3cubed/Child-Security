import { Injectable } from '@angular/core';
import { AppConfig } from '../app.config';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Admin } from "../models/index";

@Injectable()
export class AdminService {

constructor(private http:Http, private config:AppConfig) {}
  
        getAll() {
            return this.http.get(this.config.apiUrl + 'admin',this.jwt()).map((response: Response) => response.json());
        }
    
        getById(_id: string) {
            return this.http.get(this.config.apiUrl + 'admin/' + _id,this.jwt()).map((response: Response) => response.json());
        }
    
        create(admin: Admin) {
            return this.http.post(this.config.apiUrl + 'admin/register', admin,this.jwt() );
        }
    
        update(admin: Admin) {
            return this.http.put(this.config.apiUrl + 'admin/' + admin._id, admin, this.jwt());
        }
    
        delete(_id: string) {
            return this.http.delete(this.config.apiUrl + 'admin/' + _id,this.jwt() );
        }
    
      
    
        private jwt() {
            // create authorization header with jwt token
            let currentadmin = JSON.parse(localStorage.getItem('currentadmin'));
            if (currentadmin && currentadmin.token) {
                let headers = new Headers({ 'Authorization': 'Bearer ' + currentadmin.token });
                return new RequestOptions({ headers: headers });
            }
        }
    }