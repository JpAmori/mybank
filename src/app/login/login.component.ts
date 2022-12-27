import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(){ }

  moveOverlay(){
    let move: string = (<HTMLInputElement>document.getElementById('loginContainer')).value;
    const movendoTudo = document.getElementById('loginContainer');
    if(move != ""){
     movendoTudo?.classList.toggle('move')       
    }
    else{
      alert("SIIIIRRRRRRRRR")
    }
  }
}


