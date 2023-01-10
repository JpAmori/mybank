import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { consultarContaComponent } from './CriarConta/consultarConta/consultarConta.component';
import { CriarContaComponent } from './CriarConta/criarconta.component';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },  
  { path: 'CriarConta', component: CriarContaComponent },
  { path: 'ConsultarConta', component: consultarContaComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
