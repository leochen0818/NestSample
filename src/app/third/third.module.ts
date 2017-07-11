import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThirdComponent } from './third.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ThirdComponent
  ],
  exports: [
    ThirdComponent
  ]
})
export class ThirdModule { }
