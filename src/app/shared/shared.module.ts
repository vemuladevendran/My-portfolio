import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ScrollSpyDirective } from '../scroll-spy.directive';   // Adjust path accordingly

@NgModule({
  declarations: [
    ScrollSpyDirective  // Declare the directive here
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollSpyDirective  // Export the directive so it can be used in other components
  ]
})
export class SharedModule { }
