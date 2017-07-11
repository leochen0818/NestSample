import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstModule } from './first/first.module';
import { AppRoutingModule } from './app-routing.module';
import { SecondModule } from './second/second.module';
import { ThirdModule } from './third/third.module';
import { FourthComponent } from './fourth/fourth.component';

@NgModule({
  declarations: [
    AppComponent,
    FourthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FirstModule,
    SecondModule,
    ThirdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
