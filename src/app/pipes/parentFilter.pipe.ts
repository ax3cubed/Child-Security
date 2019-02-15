import { Pipe, PipeTransform } from '@angular/core';
import { Parent } from "../models/parent";
@Pipe({
  name: 'parentFilter', pure: false
})
export class ParentFilterPipe implements PipeTransform {

  transform(parents: any[], args?: any): any {
    if (args === 0) {
      args = 1;
    }
    else if(args ==''){
      return parents;
    }
    else{
      return parents.filter(function (el: any ){
        return el.email == args;
      }) 
    }
    //  console.log(parents);
    return parents;
}

}