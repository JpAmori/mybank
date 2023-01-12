import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

import { loginAuth } from './login.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

public usuario: Usuario = new Usuario();


constructor(private authService: loginAuth){ }
  ngOnInit(): void {
  }

 moveOverlay(){
    let move: string = (<HTMLInputElement>document.getElementById('loginContainer')).value;
    const movendoTudo = document.getElementById('loginContainer');
    if(move != ""){
     movendoTudo?.classList.toggle('move')       
    }
    else{
      
    }
  }

  autenticUser(){
    this.authService.realizeLogin(this.usuario);
    
  }
}