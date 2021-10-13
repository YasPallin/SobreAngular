import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreComponent } from './components';



@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
	  SobreComponent
  ]
})
export class SobreAngularModule { }
