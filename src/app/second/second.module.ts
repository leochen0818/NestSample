import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from './second.component';
import { RouterModule } from '@angular/router';
import { FourthComponent } from './fourth/fourth.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    SecondComponent,
    FourthComponent
  ],
  exports: [
    SecondComponent,
    FourthComponent
  ]
})
export class SecondModule { }
