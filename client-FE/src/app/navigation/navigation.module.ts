import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  declarations: [NavigationModule],
  imports: [
    CommonModule,
    // BsDropdownModule
  ],
  exports: [NavigationModule]
})
export class NavigationModule { }
