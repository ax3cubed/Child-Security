import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentFilterPipe } from './parentFilter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations:[
    ParentFilterPipe,
    
],
exports:[ParentFilterPipe],
 
providers:[ParentFilterPipe]
})
export class PipesModule {
  
  
 }
