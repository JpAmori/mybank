import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from './login/login.component'
import { ErrosModule } from './erros/erros.module';
import { loginModel } from './models/loginModel';
import { loginAuth } from './login/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ErrosModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [loginAuth],
  bootstrap: [AppComponent]
})
export class AppModule { }
