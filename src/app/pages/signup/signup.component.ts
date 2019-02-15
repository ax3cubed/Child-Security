import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AdminService} from "../../services/admin.service";
import {  AlertService} from "../../services/alert.service";

declare var $:any;

@Component({

  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css','../../../assets/css/material-kit.css']
})
export class SignupComponent implements OnInit {

title = "Register";
model: any= {};
loading = false;
confirmPassword:any;

  constructor(
    private adminServide:AdminService,
    private router:Router,
    private alertService:AlertService) { }

  ngOnInit() {
    $.getScript('../../../assets/js/material-kit.js');
  }

  register(){
    this.loading = true;
    
    if (this.model.password != this.model.confirmPassword) {
       console.log("error")
       
   }
   this.adminServide.create(this.model)
       .subscribe(
           
           data => {
               this.alertService.success('Registration successful', true);
               this.router.navigate(['/login']);
           },
           error => {
               this.alertService.error(error._body);
               this.loading = false;
           });

  }
  
}
