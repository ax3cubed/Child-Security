import { Component, OnInit } from '@angular/core';
import { HelperService, ParentService, AdminService,ChildService } from "../../../services/index";
declare function require(path: string): any;
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title= "Main Page";
 children=[];
 helpers=[];
 administrators=[];
 parents=[];
  constructor(private helper:HelperService,
              private child:ChildService,private admin:AdminService, private parent:ParentService) { }

  ngOnInit() {
    require('../../../../assets/js/charts.js')();
    this.loadAll();
  }
  getAllchildren(){
    this.child.getAll().subscribe(data =>{
      this.children= data;
    });
  }

  getAllParents(){
    this.parent.getAll().subscribe(data =>{
      this.parents= data;
    });
  }

  getAllHelpers(){
    this.helper.getAllHelpers().subscribe(data => {
      this.helpers= data;
    });
  }

  getAllAdministrators(){
    this.admin.getAll().subscribe(data =>{
      this.administrators= data;

    });
  }
  loadAll(){
    this.getAllAdministrators();
    this.getAllchildren();
    this.getAllHelpers();
    this.getAllParents()
  }

}
