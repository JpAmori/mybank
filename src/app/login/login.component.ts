import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(){ }

  criateCont(){
    const loginContainer = document.getElementById('loginContainer');

    const moveOverlay = () => loginContainer!.classList.toggle('move');

    document.getElementById('open-register')!.addEventListener("click", moveOverlay)
    document.getElementById('open-login')!.addEventListener("click", moveOverlay)

    document.getElementById('open-register-mobile')!.addEventListener('click', moveOverlay)
    document.getElementById('open-login-mobile')!.addEventListener('click', moveOverlay)
                               
  }
}


