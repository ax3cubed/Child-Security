import { Injectable } from '@angular/core';
import {child } from "../models/index";
import { AppConfig } from "../app.config";
import {Headers,Http , RequestOptions, Response } from "@angular/http";

@Injectable()
export class ChildService {

constructor(private http:Http, private config:AppConfig) { }

getAll(){
    return this.http.get(this.config.apiUrl + 'child/', this.jwt()).map(res=>res.json());
}

getByParentId(parentId:string){
return this.http.get(this.config.apiUrl+ 'child/all/' + parentId, this.jwt()).map((response:Response)=> response.json());
   
}
getchild(id:string){
   return this.http.get(this.config.apiUrl+'child/'+id,this.jwt()).map((res:Response)=>res.json());
}

create(child:child){
   return this.http.post(this.config.apiUrl+'child/create', child,this.jwt());
}

delete(id:string){
    return this.http.delete(this.config.apiUrl+'child/'+ id,this.jwt());
}

update(child:child){
   return this.http.put(this.config.apiUrl+ 'child/'+ child._id, child, this.jwt());
}


private jwt() {
    // create authorization header with jwt token
    let currentParent = JSON.parse(localStorage.getItem('currentadmin'));
    if (currentParent && currentParent.token) {
        let headers = new Headers({ 'Authorization': 'Bearer ' + currentParent.token });
        return new RequestOptions({ headers: headers });
    }

}

}