import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginOneComponent } from './components/login-one/login-one.component';
import { LoginTwoComponent } from './components/login-two/login-two.component';
import { LoginThreeComponent } from './components/login-three/login-three.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginOneComponent,
    LoginTwoComponent,
    LoginThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
