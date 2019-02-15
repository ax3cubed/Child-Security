import { Component, OnInit ,Input, OnChanges  } from '@angular/core';
import {ParentService  } from "../../../services/parent.service";
declare function require(path: string): any;
import { ParentFilterPipe } from "../../../pipes/parentFilter.pipe";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title="dashboard";
  parents:any=[];
  @Input() searchValue?: string = '';
  constructor(private parentService:ParentService) { }

  ngOnInit() {
    require('../../../../assets/js/charts.js')();
    this.getParents();
  }

  getParents(){
    this.parentService.getAll().subscribe(
      parents=>{this.parents= parents}
    );
  }

}
