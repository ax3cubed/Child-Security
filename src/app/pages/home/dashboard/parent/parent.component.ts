import { Component, OnInit, } from '@angular/core';
import { ParentService, ChildService, HelperService } from "../../../../services/index";
import {  ActivatedRoute , Router} from "@angular/router";
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  
  children:any=[];
    helpers:any=[];
parent:any={};
  constructor(private childservice:ChildService, 
  private helperService:HelperService,
private parentService:ParentService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getParent(this.route.snapshot.params['id']);
    this.getChildren(this.route.snapshot.params['id']);
    this.getHelper(this.route.snapshot.params['id'])
    //console.log(this.route.snapshot.params['id'])
  }
  getChildren(id:string){
    this.childservice.getByParentId(id).subscribe(
      data => {
        this.children = data;
      });
  }
  getParent(id:string){
    this.parentService.getParentCurrentParentData(id).subscribe(data=>{
      this.parent =data;
    })
  }

  getHelper(id:string){
    this.helperService.getAllbyParent(id).subscribe(
      data=>{
        this.helpers= data;
      });
  }
  
}
