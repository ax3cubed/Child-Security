import { Component, OnInit } from '@angular/core';
import { ParentService, ChildService, HelperService, AdminService } from "../../../services/index";
import { MatChipInputEvent } from '@angular/material';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { AlertsService } from "@jaspero/ng2-alerts";
@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  title="Collection Process";
  parents = [];
  adminarr:any={};
  helpers = [];
  children = [];
  model: any = {};
  disabled = false;
  helperData={};
  date:any=new Date();
  constructor(private parent: ParentService,
    private child: ChildService,
    private helper: HelperService,
    private alert:AlertsService,
  private admin:AdminService) { }

  ngOnInit() {
    this.getAllparents();
    this.adminarr = JSON.parse(localStorage.getItem("currentadmin"));
    this.getAdmin(this.adminarr._id);
    this.model.verified_by= this.adminarr._id;
  

  }
  // verifiedClick(){
  //   if (this.model.) {
  //     this.alert.create("error","No parent Selected", {duration:30000,overlay:true,showCloseButton:true,overlayClickToClose:true})
  //   }
  // }

  getAllparents() {
    this.parent.getAll().subscribe(data => {
      this.parents = data;
      console.log(data);
 });
}
getAdmin(id:string){
  this.admin.getById(id).subscribe(data =>{
    this.adminarr= data;
    console.log(data);
  })
  error=>{
    this.alert.create("error", error.body);
  }
}
  getHelper(id: string) {
    if (this.model != {}) {
      this.helper.getAllbyParent(id).subscribe(data => {
        this.helpers = data;
        console.log(data);

      });
    }
  }
  getSingleHelper(id:string){
    if (this.model !={}){
    this.helper.getHelper(id).subscribe(data =>{
      this.helperData =data;

    })
  }
  else{
    this.alert.create("error","No Helper Selected",{duration:4000,overlay:true,overlayClickToClose:true,showCloseButton:false});
  }
  }
  setDisabled(event){
    if(this.disabled==false){
      this.disabled=true;
    }
    else{
      this.disabled =false;
    }
  }
  getChildren(id: string) {
    if (this.model != {}) {
      this.child.getByParentId(id).subscribe(data => {
        this.children = data;
        console.log(data);
      });
    }
  }
  initCollection(){
    
  }

}
