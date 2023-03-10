import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { LoginComponent } from './pages/login/login.component'
import { ErrosModule } from './pages/erros/erros.module';
import { loginModel } from './models/loginModel';
import { loginAuth } from './pages/login/login.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CriarContaComponent } from './pages/CriarConta/criarconta.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CriarContaComponent
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
})
export class AppModule { }
